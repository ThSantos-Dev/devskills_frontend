import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Button from "./../../../../components/shared/Form/Button/Button";

import styles from "./RealizeTest.module.css";

interface Props {}

const RealizeTest: React.FC<Props> = () => {
  // Recupera o ID da prova
  const { id } = useParams<string>();

  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    setInterval(() => {
      let hours = new Date().getHours();
      let minutes = new Date().getMinutes();
      let seconds = new Date().getSeconds();

      setTime(`${hours}:${minutes}:${seconds} `);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://anprotec.org.br/site/wp-content/uploads/2018/09/logo-senai-cor-1-300x191.jpg"
            alt="senai"
          />
          <p>SENAI JANDIRA</p>
        </div>

        <div className={styles.progress}>
          <p>Você concluiu 20% do teste.</p>
          <progress max="100" value="20">
            70%
          </progress>
        </div>
      </header>

      <div className={styles.info_container}>
        <div>
          <p>Faltam 6 questões</p>
        </div>

        <div>
          <p>Tempo restante:</p>
          <span>{time}</span>
        </div>
      </div>

      <div className={styles.question}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially.
        </p>

        <div>
          <img
            src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp"
            alt=""
          />
        </div>

        <div className={`${styles.alternatives_container}  ${styles.single}`}>
          <div className={styles.alternative}>
            <button></button>
            <p>Alternativa 1</p>
          </div>
          <div className={styles.alternative}>
            <button></button>
            <p>Alternativa 1</p>
          </div>
          <div className={`${styles.alternative} ${styles.selected}`}>
            <button>
              <AiOutlineCheck />
            </button>
            <p>Alternativa 1</p>
          </div>
        </div>
        <div className={`${styles.alternatives_container}  ${styles.multiple}`}>
          <div className={styles.alternative}>
            <button></button>
            <p>Alternativa 1</p>
          </div>
          <div className={styles.alternative}>
            <button></button>
            <p>Alternativa 1</p>
          </div>
          <div className={`${styles.alternative} ${styles.selected}`}>
            <button>
              <AiOutlineCheck />
            </button>
            <p>Alternativa 1</p>
          </div>
        </div>

        <Button color="solid_white" size="small" text="Próxima questão" />
      </div>
    </div>
  );
};

export default RealizeTest;
