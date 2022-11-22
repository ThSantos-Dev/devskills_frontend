import React from "react";
import styles from "./Choose.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
}

const Choose = ({ type }: Props) => {
  return (
    <div className={styles.question_choose}>
      <header>
        <div className={styles.question_title}>
          <h3>O que é um array?</h3>
        </div>

        <div className={`${styles.correct_container} ${styles.incorrect}`}>
          <AiOutlineCheck />
          <span>Errou</span>
        </div>
      </header>

      <div
        className={`${styles.response_container} ${
          type === "MULTIPLA_ESCOLHA" ? styles.multiple : styles.single
        }`}
      >
        <div className={`${styles.alternative} ${styles.correct}`}>
          <span className={styles.icon}>
            <AiOutlineCheck />
          </span>
          <p>
            Lorem inpsum dolor sit emet a num sei o que mais lá com iso e aquilo
            outro
          </p>
        </div>
        <div className={`${styles.alternative} ${styles.incorrect}`}>
          <span className={styles.icon}>
            <IoCloseSharp />
          </span>
          <p>
            Lorem inpsum dolor sit emet a num sei o que mais lá com iso e aquilo
            outro
          </p>
        </div>
        <div className={`${styles.alternative}`}>
          <span className={styles.icon}>
            <IoCloseSharp />
          </span>
          <p>
            Lorem inpsum dolor sit emet a num sei o que mais lá com iso e aquilo
            outro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
