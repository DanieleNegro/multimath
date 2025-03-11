import React from "react";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { useGameStore } from "../../store/GameStore";

const ScoreBoard: React.FC = () => {
  const { t } = useTranslation(["multimathPage"]);
  const { results } = useGameStore();
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="scoreBoard">
        <h2>{t("score.title")}</h2>
        {results.length > 0 ? (
          results.map((item) => {
            return (
              <h4>
                {`${item.playerName}: ${item.score}/${item.problemCount} ${t("score.labels.forFactor")} ${item.factor}`}
              </h4>
            );
          })
        ) : (
          <h4>{t("score.labels.empty")}</h4>
        )}
      </div>
    </div>
  );
};

export default ScoreBoard;
