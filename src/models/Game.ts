import { Player } from "./Player";
import { Result } from "./Result";

export interface Game {
  player: Player;
  result: Result;
  results: Result[];
  setPlayer: (value: Player) => void;
  setResult: (value: Result) => void;
  setResults: (value: Result[]) => void;
  reset: () => void;
}
