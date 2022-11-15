import React from "react";
import styles from "./CardCompetency.module.css";

interface Props {
  title: string;
  img_url: string;
  description: string;

  handleOnClick(): void;
}

const CardCompetency: React.FC<Props> = ({
  title,
  description,
  img_url,
  handleOnClick,
}) => {
  return (
    <div className={styles.card_competency_test}>
      <h3>{title}</h3>
      <div className={styles.icon}>
        <img src={img_url} alt="icon" />
      </div>
      <p>{description}</p>
      <button onClick={handleOnClick}>Inscreva-se</button>
    </div>
  );
};

export default CardCompetency;
