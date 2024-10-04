import React from "react";
import { usePlayerContext } from "../../context/PlayerContext";

const ScoreBoard: React.FC = () => {
  const { results } = usePlayerContext();
  return (
    <div className="container-fluid d-flex mt-5">
      <div className="col-sm-2" />
      <div className="col-sm-10 ms-4">
        <h2>Scoreboard</h2>
        {results.length > 0 ? (
          results.map((item) => {
            return (
              <h4>
                {`${item.playerName}: ${item.score}/${item.problemCount} for factor ${item.factor}`}
              </h4>
            );
          })
        ) : (
          <h4>"No scores yet"</h4>
        )}
      </div>
    </div>
  );
};

export default ScoreBoard;
