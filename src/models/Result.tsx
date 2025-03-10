export interface Result {
  playerName: string;
  score: number;
  problemCount: number;
  factor: number;
}

export const DEFAULT_RESULT_STATE: Result = {
  playerName: "",
  score: 0,
  problemCount: 0,
  factor: 0,
};
