import React, { useState } from "react";
import PlayerForm from "./form/PlayerForm";
import ScoreBoard from "./score/ScoreBoard";
import Message from "./message/Message";
import Game from "./game/Game";
import { MessageProvider } from "../context/MessageContext";
import { PlayerProvider } from "../context/PlayerContext";

const MultiMath: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <MessageProvider>
      <PlayerProvider>
        <div className="container-fluid mx-0 px-0">
          <PlayerForm start={() => setGameId(gameId + 1)} />
          <Game key={gameId} />
          <ScoreBoard />
          <Message />
        </div>
      </PlayerProvider>
    </MessageProvider>
  );
};

export default MultiMath;
