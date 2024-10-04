/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import "../../App.css";
import { usePlayerContext } from "../../context/PlayerContext";
import { Player } from "../../models/Player";

const PlayerForm: React.FC = () => {
  const playerNameRef = useRef<HTMLInputElement>(null);
  const factorRef = useRef<HTMLInputElement>(null);
  const numberProblemsRef = useRef<HTMLInputElement>(null);
  const { setPlayer, setResult } = usePlayerContext();
  const [playerName, setPlayerName] = useState("");
  const [factor, setFactor] = useState("");
  const [numProblems, setNumProblems] = useState("");

  const onChangeName = (): void => {
    if (playerNameRef.current) {
      setPlayerName(playerNameRef.current.value || "");
    }
  };
  const onChangeFctor = (): void => {
    if (factorRef.current) {
      setFactor(factorRef.current.value || "");
    }
  };
  const onChangeNumProblems = (): void => {
    if (numberProblemsRef.current) {
      setNumProblems(numberProblemsRef.current.value || "");
    }
  };

  const startGame = (e: any): void => {
    e.preventDefault();
    setPlayer(new Player(playerName, 37, 0));
    setResult({
      playerName: playerName,
      score: 0,
      problemCount: parseInt(numProblems, 10),
      factor: parseInt(factor, 10),
    });
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
              ref={playerNameRef}
              type="text"
              className="form-control mb-3"
              placeholder="Player Name"
              value={playerName}
              onChange={onChangeName}
            />
          </div>
        </div>
        <div className="form-group d-flex text-end">
          <label htmlFor="factor" className="col-sm-2 control-label me-4">
            Factor
          </label>
          <div className="col-sm-2">
            <input
              ref={factorRef}
              type="text"
              className="form-control mb-3"
              placeholder="Factor"
              value={factor}
              onChange={onChangeFctor}
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
              ref={numberProblemsRef}
              type="text"
              className="form-control mb-3"
              placeholder="Number of Problems"
              value={numProblems}
              onChange={onChangeNumProblems}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;
