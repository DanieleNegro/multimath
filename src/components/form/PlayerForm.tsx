import React from "react";
import "../../App.css";
import { useMessageContext } from "../../context/MessageContext";

const PlayerForm: React.FC = () => {
  const context = useMessageContext();

  const startGame = () => {
    context?.setText("Welcome to MultiMath! Starting new game...");
  };

  return (
    <div className="container-fluid mt-4">
      <div className="form-horizontal">
        <div className="form-group d-flex text-end">
          <label htmlFor="playername" className="col-sm-2 control-label me-4">
            Player Name
          </label>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Player Name"
            />
          </div>
        </div>
        <div className="form-group d-flex text-end">
          <label htmlFor="factor" className="col-sm-2 control-label me-4">
            Factor
          </label>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Factor"
            />
          </div>
        </div>
        <div className="form-group d-flex text-end">
          <label
            htmlFor="problemcounter"
            className="col-sm-2 control-label me-4"
          >
            Number of Problems
          </label>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Number of Problems"
            />
          </div>
        </div>
        <div className="form-group d-flex">
          <div className="col-sm-2" />
          <div className="col-sm-10 ms-4">
            <button
              type="button"
              className="btn btn-orange btn-primary me-2"
              onClick={startGame}
            >
              Start Game
            </button>
            <button type="button" className="btn btn-green btn-primary">
              Calculate Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;
