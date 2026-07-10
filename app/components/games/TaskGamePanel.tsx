"use client";

import type { TaskGame } from "@/data/academic/mission-tasks";
import { GrammarGame } from "./GrammarGame";
import { VocabularyGame } from "./VocabularyGame";

type TaskGamePanelProps = {
  game: TaskGame;
  xp: number;
  completed: boolean;
  onComplete: () => void;
};

// Registry / dispatcher: maps a task's game.type to its component. Add future
// games (vocabulary, reading, listening) here — the task player never changes.
export function TaskGamePanel({ game, xp, completed, onComplete }: TaskGamePanelProps) {
  switch (game.type) {
    case "grammar-sentence-builder":
      return (
        <GrammarGame
          sentences={game.sentences}
          xp={xp}
          completed={completed}
          onComplete={onComplete}
        />
      );
    case "vocabulary-match":
      return (
        <VocabularyGame
          pairs={game.pairs}
          xp={xp}
          completed={completed}
          onComplete={onComplete}
        />
      );
    default:
      return null;
  }
}
