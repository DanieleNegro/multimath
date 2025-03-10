/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect, useState } from "react";
import { Props } from "./Props";
import { Player } from "../models/Player";
import { DEFAULT_RESULT_STATE, IResult } from "../models/Result";

interface IPlayerContext {
  player: Player;
  result: IResult;
  results: IResult[];
  setPlayer: (value: Player) => void;
  setResult: (value: IResult) => void;
  setResults: (value: IResult[]) => void;
  reset: () => void;
}

const DEFAULT_STATE_CONTEXT = {
  player: new Player(),
  result: DEFAULT_RESULT_STATE,
  results: [],
  setPlayer: () => {},
  setResult: () => {},
  setResults: () => {},
  reset: () => {},
};

export const PlayerContext = createContext<IPlayerContext>(
  DEFAULT_STATE_CONTEXT,
);

const getInitPlayer = (): Player => {
  const player = localStorage.getItem("player");
  if (player) {
    return JSON.parse(player);
  }
  return new Player();
};

const getInitResult = (): IResult => {
  const result = localStorage.getItem("result");
  if (result) {
    return JSON.parse(result);
  }
  return DEFAULT_RESULT_STATE;
};

const getInitResults = (): IResult[] => {
  const results = localStorage.getItem("results");
  if (results) {
    return JSON.parse(results);
  }
  return [];
};

export function PlayerProvider({ children }: Props) {
  const [player, setPlayer] = useState<Player>(getInitPlayer());
  const [result, setResult] = useState<IResult>(getInitResult());
  const [results, setResults] = useState<IResult[]>(getInitResults());

  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("result", JSON.stringify(result));
    localStorage.setItem("results", JSON.stringify(results));
  }, [player, result, results]);

  const reset = () => {
    setPlayer(new Player());
    setResult(DEFAULT_RESULT_STATE);
    setResults([]);
  };

  const provider = {
    player,
    result,
    results,
    setPlayer,
    setResult,
    setResults,
    reset,
  };

  return (
    <PlayerContext.Provider value={provider}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerContext = (): IPlayerContext => {
  return useContext(PlayerContext);
};
