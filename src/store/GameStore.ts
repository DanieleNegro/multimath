import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DEFAULT_RESULT_STATE, Result } from "../models/Result";
import { Player } from "../models/Player";
import { Game } from "../models/Game";

export const useGameStore = create<Game>()(
  devtools(
    persist(
      (set) => ({
        player: new Player(),
        result: DEFAULT_RESULT_STATE,
        results: [],
        setPlayer: (value: Player) => set(() => ({ player: value })),
        setResult: (value: Result) => set(() => ({ result: value })),
        setResults: (value: Result[]) => set(() => ({ results: value })),
        reset: () =>
          set(() => ({
            player: new Player(),
            result: DEFAULT_RESULT_STATE,
            results: [],
          })),
      }),
      { name: "gameStore" },
    ),
  ),
);
