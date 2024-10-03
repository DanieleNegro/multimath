import React from "react";
import Navabar from "./navbar/Navbar";
import PlayerForm from "./form/PlayerForm";
import ScoreBoard from "./score/ScoreBoard";
import Message from "./message/Message";

const MultiMath: React.FC = () => {
  return (
    <div className="container-fluid">
      <Navabar />
      <PlayerForm />
      <ScoreBoard />
      <Message />
    </div>
  );
};

export default MultiMath;
