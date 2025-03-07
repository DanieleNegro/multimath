import React from "react";
import { usePlayerContext } from "../../context/PlayerContext";
import { useTranslation } from "react-i18next";

const ScoreBoard: React.FC = () => {
  const { t } = useTranslation(["multimathPage"]);
  const { results } = usePlayerContext();
  return (
    <div className="container-fluid d-flex mt-5">
      <div className="col-sm-2" />
      <div className="col-sm-10 ms-4">
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
