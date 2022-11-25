import React from "react";
import styles from "./Dissertative.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCheck } from 'react-icons/ai';

interface Props {
  text: string;
  response: string;
  correct: boolean | null;
  img_url?: string;
}

const Dissertative: React.FC<Props> = ({
  text,
  response,
  correct,
  img_url,
}) => {
  return (
    <div className={styles.question_dissertation}>
      <header>
        <div className={styles.question_title}>
          <h3>{text}</h3>
        </div>

        {correct === null ? (
          <></>
        ) : correct ? (
          <div className={styles.correct_container}>
            <button title="Alternar">
              <AiOutlineCheck />
            </button>
            <span>Correta</span>
          </div>
        ) : (
          <div className={styles.correct_container}>
            <button title="Alternar">
              <IoCloseSharp />
            </button>
            <span>Incorreta</span>
          </div>
        )}
      </header>

      <div className={styles.image}>
        <img src={img_url} alt="Ilustration" />
      </div>

      <div className={styles.response}>
        <p>{response}</p>
      </div>

      <form className={styles.handle_choose}>
        <h3>A resposta está</h3>

        <div className={styles.input_radio_container}>
          <label className={styles.choose_radio}>
            <input type="radio" name="correct" required />
            <span>Correta</span>
          </label>
          <label className={styles.choose_radio}>
            <input type="radio" name="correct" id="" required />
            <span>Incorreta</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Dissertative;
