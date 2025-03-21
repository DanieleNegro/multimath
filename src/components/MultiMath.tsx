import React, { useState } from "react";
import PlayerForm from "./form/PlayerForm";
import ScoreBoard from "./score/ScoreBoard";
import Message from "./message/Message";
import Game from "./game/Game";
import { MessageProvider } from "../context/MessageContext";

const MultiMath: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <MessageProvider>
      <div className="container-fluid mx-0 px-0">
        <div className="container-fluid mx-0 px-0 d-flex ">
          <PlayerForm start={() => setGameId(gameId + 1)} />
          <Game key={gameId} />
        </div>
        <ScoreBoard />
        <Message />
      </div>
    </MessageProvider>
  );
};

export default MultiMath;
