import React from 'react'
import styles from "./Dissertative.module.css";
import { IoCloseSharp } from 'react-icons/io5';

interface Props {}

const Dissertative = (props: Props) => {
  return (
    <div className={styles.question_dissertation}>
      <header>
        <div className={styles.question_title}>
          <h3>Descreva JavaScript</h3>
        </div>

        <div className={styles.correct_container}>
          <button title="Alternar">
            {/* <AiOutlineCheck /> */}
            <IoCloseSharp />
          </button>
          <span>Incorreta</span>
        </div>
      </header>

      <div className={styles.image}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2F6c622fa-0015-4ae5-dc17-2280eac756bf?alt=media&token=80f21200-e0cf-47de-a89a-476320a285c2"
          alt=""
        />
      </div>

      <div className={styles.response}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          assumenda sit. Sed repellendus minus dignissimos rerum quasi! Numquam,
          doloribus atque cumque ea eius sunt dolorum tempora quis. Quaerat,
          nostrum porro?
        </p>
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
}

export default Dissertative