import React, { useEffect } from "react";
import styles from "./Personal.module.css";
import Button from "./../../../../components/shared/Form/Button/Button";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Dissertative from "./../Questions/Dissertative";
import Choose from "./../Questions/Choose";
import { useState } from "react";
import { TTestPersonalResponse } from "../../../../types/devskills/test/TTestPersonalResponse";
import candidatesService from "./../../../../services/apiDevSkills/company/candidatesService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface Props {
  show: boolean;
}

const Personal = ({ show }: Props) => {
  const { id: idTest } = useParams();

  const [currentCandidate, setCurrentCandidate] =
    useState<TTestPersonalResponse>();

  const [indexCandidate, setIndexCandidate] = useState<number>(1);

  const auth = useSelector<any, { user: { token: string } }>(
    (state) => state.auth
  );

  useEffect(() => {
    if (indexCandidate === 0) return;

    candidatesService
      .getByIndex(parseInt(idTest!), indexCandidate, auth.user.token)
      .then((res) => {
        console.log(res);

        if (res.error) return toast.error(res.error);

        setCurrentCandidate(res.data);
      })
      .catch((error) => console.error(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexCandidate]);

  return (
    <section className={`${styles.personal} ${show ? styles.active : ""}`}>
      {currentCandidate?.result?.candidato ? (
        <>
          <header>
            <div className={styles.control}>
              <FaChevronLeft />
            </div>

            <div className={styles.content}>
              <div className={styles.position}>
                <input
                  type="number"
                  value={indexCandidate}
                  id=""
                  maxLength={1}
                />
              </div>

              <div className={styles.name}>
                <span>{currentCandidate.result.candidato[0].nome}</span>
              </div>

              <div className={styles.time}>
                <span>{currentCandidate.result.candidato[0].tempo}</span>
              </div>

              <div className={styles.correct_percentage}>
                <span>
                  {currentCandidate.result.candidato[0].pontuacao || "--"}%
                </span>
              </div>
            </div>

            <div className={styles.control}>
              <FaChevronRight />
            </div>
          </header>
          <div className={styles.container}>
            {currentCandidate.result.candidato[0].questoes.map((question) => (
              <>
                {question.tipo === "DISSERTATIVA" ? (
                  <Dissertative
                    correct={null}
                    response={question.resposta!.texto}
                    text={question.enunciado}
                  />
                ) : (
                  <Choose
                    title={question.enunciado}
                    correct={
                      question.alternativas!.filter(
                        (alternative) =>
                          alternative.selecionada &&
                          alternative.correta === true
                      ).length > 0
                    }
                    alternatives={question.alternativas!.map((alternative) => ({
                      text: alternative.texto,
                      correct: alternative.correta,
                      selected: alternative.selecionada,
                    }))}
                    type={question.tipo}
                  />
                )}
              </>
            ))}

            {/* <Dissertative /> */}
            {/* <Choose type="UNICA_ESCOLHA" /> */}
            {/* <Choose type="MULTIPLA_ESCOLHA" /> */}
          </div>

          <Button
            size="small"
            color="solid_white"
            text="Salvar"
            submit={true}
            style={{ alignSelf: "flex-end" }}
          />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </section>
  );
};

export default Personal;
