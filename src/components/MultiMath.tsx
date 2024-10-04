import React from "react";
import Navabar from "./navbar/Navbar";
import PlayerForm from "./form/PlayerForm";
import ScoreBoard from "./score/ScoreBoard";
import Message from "./message/Message";
import Game from "./game/Game";

const MultiMath: React.FC = () => {
  return (
    <div className="container-fluid mx-0 px-0">
      <Navabar />
      <PlayerForm />
      <Game />
      <ScoreBoard />
      <Message />
    </div>
  );
};

export default MultiMath;
