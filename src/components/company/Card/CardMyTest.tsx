import React from "react";
import styles from "./CardMyTest.module.css";
import { useNavigate } from "react-router-dom";
import { TResult } from "../../../types/devskills/test/TTestOfCompany";

interface Props {
  test: TResult;
}

const CardMyTest = ({ test }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      key={test.id}
      onClick={() => navigate("/company/test/applicate/" + test.id)}
    >
      <h2>{test.prova.titulo}</h2>
      <p>{test.prova.descricao}</p>

      <div className={styles.card_info}>
        <span>{test.prova.ativo ? "Ativa" : "Inativa"}</span>
        <span>
          Até {test.data_fim.split("T")[0].split("-").reverse().join("/")}
        </span>
      </div>
    </div>
  );
};

export default CardMyTest;
