import React, { useRef, useState } from "react";
import "../../App.css";
import "./Game.css";
import { usePlayerContext } from "../../context/PlayerContext";

const Game: React.FC = () => {
  const { result, setResult } = usePlayerContext();
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [listFault, setListFault] = useState<number[]>([]);

  const buildForm = () => {
    const list = [];
    for (let i = 0; i < result.problemCount; i++) {
      list.push(
        <div key={`answer${i}`} className="form-group d-flex text-end">
          <label htmlFor={`answer${i}`} className="col-sm-2 control-label me-4">
            {`${result.factor} x ${i} =`}
          </label>
          <div className="col-sm-2">
            <input
              ref={(el: HTMLInputElement) => (inputsRef.current[i] = el)}
              id={`answer${i}`}
              type="number"
              className={`form-control mb-3 ${listFault.includes(i) ? "failed" : ""} `}
              name={`answer${i}`}
            />
          </div>
        </div>,
      );
    }
    return list;
  };

  return (
    result.problemCount > 0 && (
      <div className="container-fluid d-flex mt-5">
        <form
          className="form-horizontal w-100"
          onSubmit={(event: React.SyntheticEvent<HTMLFormElement>) => {
            event.preventDefault();
            const listFault: number[] = [];
            let score = 0;
            for (let i = 0; i < result.problemCount; i++) {
              const answer: number = inputsRef.current[i].valueAsNumber;
              if (i * result.factor === answer) {
                score++;
              } else {
                listFault.push(i);
              }
            }
            setListFault(listFault);
            setResult({
              playerName: result.playerName,
              score: score,
              problemCount: result.problemCount,
              factor: result.factor,
            });
          }}
        >
          {buildForm()}
          <div className="form-group d-flex">
            <div className="col-sm-2" />
            <div className="col-sm-10 ms-4">
              <input
                type="submit"
                value="Calculate Score"
                className="btn btn-green btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default Game;
