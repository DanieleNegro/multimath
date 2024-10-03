import React from "react";

const ScoreBoard: React.FC = () => {
  return (
    <div className="container-fluid d-flex mt-5">
      <div className="col-sm-2" />
      <div className="col-sm-10 ms-4">
        <h2>Scoreboard</h2>
        <h4>No scores yet</h4>
      </div>
    </div>
  );
};

export default ScoreBoard;
