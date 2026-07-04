"use client";

import { useMemo, useState } from "react";
import type { GrammarSentence } from "@/data/academic/mission-tasks";

const CORRECT_POINTS = 10;
const STREAK_BONUS = 5;
const STREAK_THRESHOLD = 3;

type GrammarGameProps = {
  sentences: GrammarSentence[];
  /** XP awarded by the task (shown on the completion screen). */
  xp: number;
  /** True if this task was already completed (XP already counted). */
  completed: boolean;
  /** Reuses the task player's progress system to award XP once, on finish. */
  onComplete: () => void;
};

// Deterministic-enough shuffle for display. Runs only in the browser (client
// component), so Math.random is fine here. Guarantees the result differs from
// the original order when possible, so the drill is never pre-solved.
function shuffle(words: string[]): string[] {
  if (words.length < 2) return [...words];
  let result = [...words];
  for (let attempt = 0; attempt < 8; attempt += 1) {
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    if (result.some((word, index) => word !== words[index])) break;
  }
  return result;
}

type WordToken = { word: string; id: number };

export function GrammarGame({ sentences, xp, completed, onComplete }: GrammarGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placed, setPlaced] = useState<WordToken[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [verdict, setVerdict] = useState<null | { passed: boolean; message: string }>(null);
  const [finished, setFinished] = useState(false);

  const current = sentences[currentIndex];

  // Shuffled word bank for the current sentence. Re-shuffles when the sentence
  // changes. Each token carries a stable id so duplicate words stay distinct.
  const bank = useMemo<WordToken[]>(() => {
    return shuffle(current.words).map((word, index) => ({ word, id: index }));
  }, [current]);

  const available = bank.filter((token) => !placed.some((chosen) => chosen.id === token.id));
  const total = sentences.length;

  function placeWord(token: WordToken) {
    if (verdict) return;
    setPlaced((prev) => [...prev, token]);
  }

  function removeWord(tokenId: number) {
    if (verdict) return;
    setPlaced((prev) => prev.filter((token) => token.id !== tokenId));
  }

  function checkAnswer() {
    if (verdict || placed.length !== current.words.length) return;
    const answer = placed.map((token) => token.word);
    const isCorrect = answer.every((word, index) => word === current.words[index]);

    if (isCorrect) {
      const nextStreak = streak + 1;
      const bonus = nextStreak >= STREAK_THRESHOLD ? STREAK_BONUS : 0;
      setScore((prev) => prev + CORRECT_POINTS + bonus);
      setStreak(nextStreak);
      setCorrectCount((prev) => prev + 1);
      setVerdict({
        passed: true,
        message: bonus > 0 ? `Correct! +${CORRECT_POINTS} (+${bonus} streak bonus)` : `Correct! +${CORRECT_POINTS}`
      });
    } else {
      setStreak(0);
      setVerdict({
        passed: false,
        message: `Not quite. Correct answer: "${current.words.join(" ")}"`
      });
    }
  }

  function nextSentence() {
    const isLast = currentIndex >= total - 1;
    setVerdict(null);
    setPlaced([]);
    if (isLast) {
      setFinished(true);
      if (!completed) onComplete();
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  }

  if (finished) {
    return (
      <section className="navalOrderPanel cadetActionPanel" aria-label="Sentence Builder results">
        <span>Sentence Builder — Complete</span>
        <div className="missionCompletePanel" style={{ marginTop: 12 }}>
          <p className="eyebrow">Drill Complete</p>
          <h2>Well done, cadet!</h2>
          <p>
            You rebuilt {correctCount} of {total} sentences correctly. Final score: <strong>{score}</strong> points.
          </p>
          <strong>+{xp} XP earned</strong>
        </div>
      </section>
    );
  }

  return (
    <section className="navalOrderPanel cadetActionPanel" aria-label="Sentence Builder game">
      <span>Cadet Action — Sentence Builder</span>
      <p>Tap the words in the correct order to rebuild the sentence, then press Check.</p>

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
        <span>Sentence {currentIndex + 1} / {total}</span>
        <span>Score: <strong>{score}</strong></span>
        <span>Streak: <strong>{streak}</strong>{streak >= STREAK_THRESHOLD ? " 🔥" : ""}</span>
        <span style={{ opacity: 0.75 }}>Grammar: {current.grammarPoint}</span>
      </div>

      {/* Answer row */}
      <div
        aria-label="Your sentence"
        style={{
          minHeight: 52,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          padding: 12,
          borderRadius: 8,
          border: "1px dashed var(--border, rgba(255,255,255,0.25))",
          marginBottom: 12
        }}
      >
        {placed.length === 0 ? (
          <span style={{ opacity: 0.5 }}>Your sentence will appear here…</span>
        ) : (
          placed.map((token) => (
            <button
              key={token.id}
              type="button"
              onClick={() => removeWord(token.id)}
              disabled={!!verdict}
              className="wordChip wordChipPlaced"
              style={chipStyle(true)}
            >
              {token.word}
            </button>
          ))
        )}
      </div>

      {/* Word bank */}
      <div aria-label="Word bank" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {available.map((token) => (
          <button
            key={token.id}
            type="button"
            onClick={() => placeWord(token)}
            disabled={!!verdict}
            className="wordChip"
            style={chipStyle(false)}
          >
            {token.word}
          </button>
        ))}
      </div>

      {verdict ? (
        <div
          className="missionBadge"
          aria-live="polite"
          style={{ borderLeftColor: verdict.passed ? "#22c55e" : "var(--alert)", marginBottom: 12 }}
        >
          <span>{verdict.passed ? "Correct" : "Review"}</span>
          <strong style={{ color: verdict.passed ? "#22c55e" : "var(--alert)" }}>{verdict.message}</strong>
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {!verdict ? (
          <button
            className="primaryAction"
            type="button"
            disabled={placed.length !== current.words.length}
            onClick={checkAnswer}
          >
            Check
          </button>
        ) : (
          <button className="primaryAction" type="button" onClick={nextSentence}>
            {currentIndex >= total - 1 ? "Finish Drill →" : "Next Sentence →"}
          </button>
        )}
        {!verdict && placed.length > 0 ? (
          <button className="secondaryAction" type="button" onClick={() => setPlaced([])}>
            Clear
          </button>
        ) : null}
      </div>
    </section>
  );
}

function chipStyle(placed: boolean): React.CSSProperties {
  return {
    padding: "8px 14px",
    borderRadius: 999,
    border: "1px solid var(--border, rgba(255,255,255,0.25))",
    background: placed ? "var(--accent, #2563eb)" : "transparent",
    color: "inherit",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: 600
  };
}
