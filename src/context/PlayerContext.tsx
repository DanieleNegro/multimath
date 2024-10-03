import React, { createContext, useContext, useState } from "react";
import { Props } from "./Props";

interface IPlayer {
  name: string;
  factor: string;
  numPreblems: string;
  score: number;
}

interface IPlayerContext {
  player: IPlayer;
  setPlayer: (value: IPlayer) => void;
}

const DEFAULT_STATE: IPlayer = {
  name: "",
  factor: "",
  numPreblems: "",
  score: 0,
};

const DEFAULT_STATE_CONTEXT = {
  player: DEFAULT_STATE,
  setPlayer: () => {},
};

export const PlayerContext = createContext<IPlayerContext>(
  DEFAULT_STATE_CONTEXT,
);

export function PlayerProvider({ children, ...props }: Props) {
  const [player, setPlayer] = useState<IPlayer>(DEFAULT_STATE);

  const provider = {
    player,
    setPlayer,
  };

  return (
    <PlayerContext.Provider value={provider}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerContext = (): IPlayerContext => {
  return useContext(PlayerContext);
};
