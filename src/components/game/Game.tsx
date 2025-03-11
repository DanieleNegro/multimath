import React, { useRef, useState } from "react";
import "../../App.css";
import "./Game.css";
import { useTranslation } from "react-i18next";
import { useMessageContext } from "../../context/MessageContext";
import { useGameStore } from "../../store/GameStore";

const Game: React.FC = () => {
  const { t } = useTranslation(["multimathPage"]);
  const { setText } = useMessageContext();
  const { result, results, setResults } = useGameStore();
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [listFault, setListFault] = useState<number[]>([]);

  const buildForm = () => {
    const list = [];
    for (let i = 0; i < result.problemCount; i++) {
      list.push(
        <div key={`answer${i}`} className="d-flex">
          <label
            htmlFor={`answer${i}`}
            className="control-label w-auto me-4 text-end"
          >
            {`${result.factor} x ${i} =`}
          </label>
          <input
            ref={(el: HTMLInputElement) => (inputsRef.current[i] = el)}
            id={`answer${i}`}
            type="number"
            className={`form-control mb-3 ${listFault.includes(i) ? "failed" : ""} `}
            name={`answer${i}`}
            placeholder={t("placeholders.answer")}
          />
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
      <div className="container-fluid d-flex justify-content-center mt-4">
        <form onSubmit={onSubmit}>
          {buildForm()}
          <div className="d-flex">
            <input
              type="submit"
              value={t("labels.calculateBtn")}
              className="btn btn-green btn-primary w-100"
            />
          </div>
        </form>
      </div>
    )
  );
};

export default Game;
