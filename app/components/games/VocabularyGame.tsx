"use client";

import { useMemo, useState } from "react";
import type { VocabularyPair } from "@/data/academic/mission-tasks";

const CORRECT_POINTS = 10;
const STREAK_BONUS = 5;
const STREAK_THRESHOLD = 3;
// With 12 pairs, show them in rounds of 4 so the mobile screen never gets
// crowded. When the four pairs of a round are matched, the next round enters.
const ROUND_SIZE = 4;

type VocabularyGameProps = {
  pairs: VocabularyPair[];
  /** XP awarded by the task (shown on the completion screen). */
  xp: number;
  /** True if this task was already completed (XP already counted). */
  completed: boolean;
  /** Reuses the task player's progress system to award XP once, on finish. */
  onComplete: () => void;
};

// Deterministic-enough shuffle for display. Runs only in the browser (client
// component), so Math.random is fine here. Guarantees the result differs from
// the original order when possible, so a column is never pre-solved.
function shuffle<T>(items: T[]): T[] {
  if (items.length < 2) return [...items];
  let result = [...items];
  for (let attempt = 0; attempt < 8; attempt += 1) {
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    if (result.some((item, index) => item !== items[index])) break;
  }
  return result;
}

type PairToken = VocabularyPair & { id: number };

export function VocabularyGame({ pairs, xp, completed, onComplete }: VocabularyGameProps) {
  const [currentRound, setCurrentRound] = useState(0);
  const [matched, setMatched] = useState<number[]>([]);
  const [errored, setErrored] = useState<number[]>([]);
  const [selectedTermId, setSelectedTermId] = useState<number | null>(null);
  const [wrongDefId, setWrongDefId] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [firstTryCount, setFirstTryCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = pairs.length;

  // Split the pairs into rounds of ROUND_SIZE. Each round keeps a term column
  // and a definition column, each SHUFFLED INDEPENDENTLY. Computed once (pairs
  // are stable), so state changes never re-shuffle the board.
  const rounds = useMemo(() => {
    const withId: PairToken[] = pairs.map((pair, id) => ({ ...pair, id }));
    const chunks: PairToken[][] = [];
    for (let i = 0; i < withId.length; i += ROUND_SIZE) {
      chunks.push(withId.slice(i, i + ROUND_SIZE));
    }
    return chunks.map((chunk) => ({
      terms: shuffle(chunk),
      definitions: shuffle(chunk)
    }));
  }, [pairs]);

  const round = rounds[currentRound];
  const matchedSet = useMemo(() => new Set(matched), [matched]);
  const totalRounds = rounds.length;

  function selectTerm(termId: number) {
    if (matchedSet.has(termId)) return;
    setWrongDefId(null);
    setSelectedTermId((prev) => (prev === termId ? null : termId));
  }

  function attemptMatch(defId: number) {
    if (matchedSet.has(defId) || selectedTermId === null) return;

    if (defId === selectedTermId) {
      // Correct pair.
      const nextStreak = streak + 1;
      const bonus = nextStreak >= STREAK_THRESHOLD ? STREAK_BONUS : 0;
      const wasClean = !errored.includes(defId);
      setScore((prev) => prev + CORRECT_POINTS + bonus);
      setStreak(nextStreak);
      if (wasClean) setFirstTryCount((prev) => prev + 1);
      setSelectedTermId(null);
      setWrongDefId(null);

      const nextMatched = [...matched, defId];
      setMatched(nextMatched);

      // Advance the round once every pair in it is matched.
      const roundIds = round.terms.map((token) => token.id);
      const roundDone = roundIds.every((id) => nextMatched.includes(id));
      if (roundDone) {
        const isLastRound = currentRound >= totalRounds - 1;
        if (isLastRound) {
          setFinished(true);
          if (!completed) onComplete();
        } else {
          setCurrentRound((prev) => prev + 1);
        }
      }
    } else {
      // Wrong pair: break the streak, remember the term erred, brief red flash.
      setStreak(0);
      setErrored((prev) => (prev.includes(selectedTermId) ? prev : [...prev, selectedTermId]));
      setWrongDefId(defId);
      setSelectedTermId(null);
    }
  }

  if (finished) {
    return (
      <section className="navalOrderPanel cadetActionPanel" aria-label="Vocabulary Match results">
        <span>Vocabulary Match — Complete</span>
        <div className="missionCompletePanel" style={{ marginTop: 12 }}>
          <p className="eyebrow">Drill Complete</p>
          <h2>Well done, cadet!</h2>
          <p>
            You matched all {total} terms, {firstTryCount} of them on the first try. Final score:{" "}
            <strong>{score}</strong> points.
          </p>
          <strong>+{xp} XP earned</strong>
        </div>
      </section>
    );
  }

  return (
    <section className="navalOrderPanel cadetActionPanel" aria-label="Vocabulary Match game">
      <span>Cadet Action — Vocabulary Match</span>
      <p>Tap a term, then tap the definition that matches it. Correct pairs lock in.</p>

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          margin: "8px 0 12px",
          fontSize: "0.85rem",
          opacity: 0.9
        }}
      >
        <span>Round {currentRound + 1} / {totalRounds}</span>
        <span>Matched: <strong>{matched.length}</strong> / {total}</span>
        <span>Score: <strong>{score}</strong></span>
        <span>Streak: <strong>{streak}</strong>{streak >= STREAK_THRESHOLD ? " 🔥" : ""}</span>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* Terms column */}
        <div aria-label="Terms" style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: 8 }}>
          {round.terms.map((token) => {
            const isMatched = matchedSet.has(token.id);
            const isSelected = selectedTermId === token.id;
            return (
              <button
                key={`term-${token.id}`}
                type="button"
                onClick={() => selectTerm(token.id)}
                disabled={isMatched}
                aria-pressed={isSelected}
                className="wordChip"
                style={cardStyle({ matched: isMatched, selected: isSelected, wrong: false })}
              >
                {token.term}
              </button>
            );
          })}
        </div>

        {/* Definitions column */}
        <div aria-label="Definitions" style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 8 }}>
          {round.definitions.map((token) => {
            const isMatched = matchedSet.has(token.id);
            const isWrong = wrongDefId === token.id;
            return (
              <button
                key={`def-${token.id}`}
                type="button"
                onClick={() => attemptMatch(token.id)}
                disabled={isMatched}
                className="wordChip"
                style={cardStyle({ matched: isMatched, selected: false, wrong: isWrong })}
              >
                {token.definition}
              </button>
            );
          })}
        </div>
      </div>

      {wrongDefId !== null ? (
        <div
          className="missionBadge"
          aria-live="polite"
          style={{ borderLeftColor: "var(--alert)", marginTop: 12 }}
        >
          <span>Review</span>
          <strong style={{ color: "var(--alert)" }}>Not a match. Try another definition.</strong>
        </div>
      ) : null}
    </section>
  );
}

function cardStyle({ matched, selected, wrong }: { matched: boolean; selected: boolean; wrong: boolean }): React.CSSProperties {
  const background = matched
    ? "#22c55e"
    : selected
      ? "var(--accent, #2563eb)"
      : "transparent";
  const borderColor = wrong ? "var(--alert)" : "var(--border, rgba(255,255,255,0.25))";
  return {
    padding: "10px 14px",
    borderRadius: 10,
    border: `1px solid ${borderColor}`,
    background,
    color: "inherit",
    cursor: matched ? "default" : "pointer",
    fontSize: "0.92rem",
    fontWeight: 600,
    textAlign: "left",
    opacity: matched ? 0.85 : 1
  };
}
