import React from "react";
import { usePlayerContext } from "../../context/PlayerContext";

const ScoreBoard: React.FC = () => {
  const { player, result } = usePlayerContext();
  return (
    <div className="container-fluid d-flex mt-5">
      <div className="col-sm-2" />
      <div className="col-sm-10 ms-4">
        <h2>Scoreboard</h2>
        <h4>
          {player?.name?.length > 0
            ? `${player.formatName()}: ${result.score}/${result.problemCount} for factor ${result.factor}`
            : "No scores yet"}
        </h4>
      </div>
    </div>
  );
};

export default ScoreBoard;
