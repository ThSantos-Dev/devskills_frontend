import React from "react";
import styles from "./Choose.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  title: string;
  alternatives: { text: string; correct: boolean; selected: boolean }[];
  correct: boolean;
  img_url?: string;
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
}

const Choose = ({ title, type, alternatives, correct, img_url }: Props) => {
  return (
    <div className={styles.question_choose}>
      <header>
        <div className={styles.question_title}>
          <h3>{title}</h3>
        </div>

        <div
          className={`${styles.correct_container} ${
            correct ? styles.correct : styles.incorrect
          }`}
        >
          {correct ? (
            <>
              {" "}
              <AiOutlineCheck />
              <span>Acertou</span>
            </>
          ) : (
            <>
              {" "}
              <IoCloseSharp />
              <span>Errou</span>
            </>
          )}
        </div>
      </header>

      {img_url && (
        <div className={styles.image}>
          <img src={img_url} alt="" />
        </div>
      )}

      <div
        className={`${styles.response_container} ${
          type === "MULTIPLA_ESCOLHA" ? styles.multiple : styles.single
        }`}
      >
        {alternatives.map((alternative, index) => (
          <div
            key={index}
            className={`${styles.alternative} ${
              alternative.correct && alternative.selected
                ? styles.correct
                : styles.incorrect
            }`}
          >
            <span className={styles.icon}>
              {alternative.correct ? <AiOutlineCheck /> : <IoCloseSharp />}
            </span>
            <p>{alternative.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
