import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Button from "./../../../../components/shared/Form/Button/Button";

import styles from "./RealizeTest.module.css";

interface Props {}

const RealizeTest: React.FC<Props> = () => {
  // Recupera o ID da prova
  const { id } = useParams<string>();

  let tempo = 20
  // let intervalId: any = null;

  // useEffect(() => {
  //   let initialTime: any = time.split(":");
  //   let date = new Date();
  //   date.setHours(initialTime[0]);
  //   date.setMinutes(initialTime[1]);
  //   date.setSeconds(0);
  //   console.log(date.getTime());

  //   let i = 0;

  //   intervalId = setInterval(() => {
  //     console.log("i:", i);
  //     console.log("conta:", date.getTime() - i);
  //     setTime(new Date(date.getTime() - i).toLocaleTimeString());
  //     i += 1000;
  //   }, 1000);
  // }, []);


// function countdown() {
//   // Se o tempo não for zerado
//   if (tempo - 1 >= -1) {
//     // Pega a parte inteira dos minutos
//     let min : any = (tempo / 60);
//     // Calcula os segundos restantes
//     let seg: any = tempo % 60;
//     // Formata o número menor que dez, ex: 08, 07, ...
//     if (min < 10) {
//       min = "0" + min;
//       min = min.substr(0, 2);
//     }
//     if (seg <= 9) {
//       seg = "0" + seg;
//     }

//     // Cria a variável para formatar no estilo hora/cronômetro
//     console.log("00:" + min + ":" + seg);
//     //JQuery pra setar o valor
    

//     // Define que a função será executada novamente em 1000ms = 1 segundo
//   setTimeout(() => countdown(), 1000);

//     // diminui o tempo
//     tempo--;

//     // Quando o contador chegar a zero faz esta ação
//   } else {
//     alert('encerrado')
//   }
// }



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
          <span>{}</span>
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
