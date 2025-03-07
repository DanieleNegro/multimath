import React, { useRef, useState } from "react";
import "../../App.css";
import "./Game.css";
import { usePlayerContext } from "../../context/PlayerContext";
import { useTranslation } from "react-i18next";
import { useMessageContext } from "../../context/MessageContext";

const Game: React.FC = () => {
  const { t } = useTranslation(["multimathPage"]);
  const { setText } = useMessageContext();
  const { result, results, setResults } = usePlayerContext();
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
              placeholder={t("placeholders.answer")}
            />
          </div>
        </div>,
      );
    }
    return list;
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
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
    setResults([
      ...results,
      {
        playerName: result.playerName,
        score: score,
        problemCount: result.problemCount,
        factor: result.factor,
      },
    ]);
    setText(listFault.length > 0 ? "Looser!" : "Winner!");
  };

  return (
    result.problemCount > 0 && (
      <div className="container-fluid d-flex mt-5">
        <form className="form-horizontal w-100" onSubmit={onSubmit}>
          {buildForm()}
          <div className="form-group d-flex">
            <div className="col-sm-2" />
            <div className="col-sm-10 ms-4">
              <input
                type="submit"
                value={t("labels.calculateBtn")}
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
