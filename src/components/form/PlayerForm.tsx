import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";
import { Player, PlayerFormElement } from "../../models/Player";
import { useGameStore } from "../../store/GameStore";

interface IPlayerForm {
  start: () => void;
}

const PlayerForm: React.FC<IPlayerForm> = ({ start }) => {
  const { t } = useTranslation(["multimathPage"]);
  const { player, setPlayer, setResult, reset } = useGameStore();

  const startGame = (event: React.FormEvent<PlayerFormElement>): void => {
    event.preventDefault();
    start();
    const { elements } = event.currentTarget;
    setPlayer(
      new Player(
        elements.playerName.value,
        parseInt(elements.playerAge.value, 10),
        0,
      ),
    );
    setResult({
      playerName: elements.playerName.value,
      score: 0,
      problemCount: parseInt(elements.numProblems.value, 10),
      factor: parseInt(elements.factor.value, 10),
    });
  };

  return (
    <div className="container-fluid mt-4 d-flex">
      <form onSubmit={startGame}>
        <label htmlFor="playername" className="control-label">
          {t("labels.playerName")}
        </label>
        <input
          type="text"
          name="playerName"
          className="form-control mb-3"
          placeholder={t("placeholders.playerName")}
          value={player.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPlayer(new Player(e.target.value, player.age, 0));
          }}
        />
        <label htmlFor="playerage" className="control-label">
          {t("labels.playerAge")}
        </label>
        <input
          type="number"
          name="playerAge"
          min="1"
          className="form-control mb-3"
          placeholder={t("placeholders.playerAge")}
          value={player.age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPlayer(new Player(player.name, parseInt(e.target.value, 10), 0));
          }}
        />
        <label htmlFor="factor" className="control-label">
          {t("labels.factor")}
        </label>
        <input
          type="number"
          name="factor"
          min="1"
          pattern="[0-9]{1}"
          className="form-control mb-3"
          placeholder={t("placeholders.factor")}
        />
        <label htmlFor="problemcounter" className="control-label">
          {t("labels.nProblems")}
        </label>
        <input
          type="number"
          name="numProblems"
          min="1"
          pattern="[0-9]{1}"
          className="form-control mb-3"
          placeholder={t("placeholders.nProblems")}
        />
        <div className="d-flex">
          <input
            type="reset"
            className="btn btn-orange btn-primary me-2 w-50"
            value={t("labels.resetFormBtn")}
          />
          <button
            type="button"
            className="btn btn-orange btn-primary me-2 w-50"
            onClick={reset}
          >
            {t("labels.resetBtn")}
          </button>
          <input
            type="submit"
            className="btn btn-orange btn-primary me-2 w-50"
            value={t("labels.starBtn")}
          />
        </div>
      </form>
    </div>
  );
};

export default PlayerForm;
