import React, { useState } from "react";
import Navabar from "./navbar/Navbar";
import PlayerForm from "./form/PlayerForm";
import ScoreBoard from "./score/ScoreBoard";
import Message from "./message/Message";
import Game from "./game/Game";

const MultiMath: React.FC = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="container-fluid mx-0 px-0">
      <Navabar />
      <PlayerForm start={() => setGameId(gameId + 1)} />
      <Game key={gameId} />
      <ScoreBoard />
      <Message />
    </div>
  );
};

export default MultiMath;
