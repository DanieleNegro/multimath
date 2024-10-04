/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import { Props } from "./Props";
import { Player } from "../models/Player";
import { DEFAULT_RESULT_STATE, IResult } from "../models/Result";

interface IPlayerContext {
  player: Player;
  result: IResult;
  setPlayer: (value: Player) => void;
  setResult: (value: IResult) => void;
}

const DEFAULT_STATE_CONTEXT = {
  player: new Player(),
  result: DEFAULT_RESULT_STATE,
  setPlayer: () => {},
  setResult: () => {},
};

export const PlayerContext = createContext<IPlayerContext>(
  DEFAULT_STATE_CONTEXT,
);

export function PlayerProvider({ children }: Props) {
  const [player, setPlayer] = useState<Player>(new Player());
  const [result, setResult] = useState<IResult>(DEFAULT_RESULT_STATE);

  const provider = {
    player,
    setPlayer,
    result,
    setResult,
  };

  return (
    <PlayerContext.Provider value={provider}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerContext = (): IPlayerContext => {
  return useContext(PlayerContext);
};
