import React from 'react'
import styles from './Personal.module.css'
import Button from './../../../../components/shared/Form/Button/Button';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import Dissertative from './../Questions/Dissertative';
import Choose from './../Questions/Choose';

interface Props {
    show: boolean;
}

const Personal = ({show}: Props) => {
  return (
    <section
      className={`${styles.personal} ${show ? styles.active : ""}`}
    >
      <header>
        <div className={styles.control}>
          <FaChevronLeft />
        </div>

        <div className={styles.content}>
          <div className={styles.position}>
            <input type="number" name="" id="" maxLength={1} />
          </div>

          <div className={styles.name}>
            <span>Thales Santos da Silva</span>
          </div>

          <div className={styles.time}>
            <span>00:32:00</span>
          </div>

          <div className={styles.correct_percentage}>
            <span>80%</span>
          </div>
        </div>

        <div className={styles.control}>
          <FaChevronRight />
        </div>
      </header>

      <div className={styles.container}>
        <Dissertative />
        <Choose type='UNICA_ESCOLHA'/>
        <Choose type='MULTIPLA_ESCOLHA'/>
      </div>

      <Button
        size="small"
        color="solid_white"
        text="Salvar"
        submit={true}
        style={{ alignSelf: "flex-end" }}
      />
    </section>
  );
}

export default Personal