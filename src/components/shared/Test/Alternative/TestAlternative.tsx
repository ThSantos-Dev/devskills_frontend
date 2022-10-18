import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './TestAlternative.module.css'

interface Props {
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA"
}

const TestAlternative: React.FC<Props> = ({type}) => {
  return (
    <div className={`${styles.alternative_container} ${type === 'UNICA_ESCOLHA' ? styles.single : styles.multiples}`}>
      <div className={`${styles.alternative}  ${false ? styles.correct : ""}`}>
        <button className={styles.icon}>{true && <AiOutlineCheck />}</button>
        <input type="text" placeholder="Insira uma alternativa..." />
      </div>

      <div className={styles.icon}>
        <BsFillTrashFill />
      </div>
    </div>
  );
}

export default TestAlternative