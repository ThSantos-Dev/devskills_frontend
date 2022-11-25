import React from "react";
import styles from "./Dissertative.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  id: number;
  text: string;
  response: string;
  correct: boolean | null;
  img_url?: string;
  handleCorrectionResponse(idQuestion: number, correct: boolean): void;
}

const Dissertative: React.FC<Props> = ({
  id,
  text,
  response,
  correct,
  img_url,
  handleCorrectionResponse,
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
            <input
              type="radio"
              name="correct"
              required
              onClick={() => handleCorrectionResponse(id, true)}
            />
            <span>Correta</span>
          </label>
          <label className={styles.choose_radio}>
            <input
              type="radio"
              name="correct"
              id=""
              required
              onClick={() => handleCorrectionResponse(id, false)}
            />
            <span>Incorreta</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Dissertative;
