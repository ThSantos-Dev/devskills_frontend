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

  const [correctionData, setCorrectionData] = useState<any>();

  const handleCorrectionResponse = (idQuestion: number, correct: boolean) => {
    const correction = correctionData.questoesCorrigidas.map(
      (question: any) => {
        if (question.id_questao === idQuestion) {
          return {
            id_questao: idQuestion,
            correta: correct,
          };
        }

        return question;
      }
    );

    setCorrectionData({ ...correctionData, questoesCorrigidas: correction });
  };

  const handleSubmitCorrectionData = async () => {
    const res = await candidatesService.sendCorrection(
      currentCandidate!.result.idProvaAndamento,
      correctionData,
      auth.user.token
    );

    console.log(res);

    if(res.error)
      return toast.error(res.error);

    if(res.success)
      return toast.success(res.message);
    
  };

  useEffect(() => {
    if (indexCandidate === 0)  return;

    candidatesService
      .getByIndex(parseInt(idTest!), indexCandidate, auth.user.token)
      .then((res) => {
        console.log(res);

        if (res.error) return toast.error(res.error);

        let data: TTestPersonalResponse = res.data;
        setCorrectionData({
          id_prova_usuario: data.result.candidato[0].idProvaUsuario,
          questoesCorrigidas: data.result.candidato[0].questoes
            .filter((question) => question.tipo === "DISSERTATIVA")
            .map((question) => {
              return {
                id_questao: question.id,
                correta: null,
              };
            }),
        });

        setCurrentCandidate(data);
      })
      .catch((error) => console.error(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexCandidate]);

  useEffect(() => {
    console.log("correção: ", correctionData);
  }, [correctionData]);

  return (
    <section className={`${styles.personal} ${show ? styles.active : ""}`}>
      {currentCandidate?.result?.candidato ? (
        <>
          <header>
            <div
              className={styles.control}
              onClick={() => setIndexCandidate(indexCandidate - 1)}
            >
              <FaChevronLeft />
            </div>

            <div className={styles.content}>
              <div className={styles.position}>
                <input
                  type="number"
                  value={indexCandidate}
                  id=""
                  max={currentCandidate.totalResults}
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

            <div
              className={styles.control}
              onClick={() => setIndexCandidate(indexCandidate + 1)}
            >
              <FaChevronRight />
            </div>
          </header>
          <div className={styles.container}>
            {currentCandidate.result.candidato[0].questoes.map(
              (question, index) => (
                <>
                  {question.tipo === "DISSERTATIVA" ? (
                    <Dissertative
                      key={index}
                      id={question.id}
                      correct={null}
                      handleCorrectionResponse={handleCorrectionResponse}
                      response={question.resposta!.texto}
                      text={question.enunciado}
                    />
                  ) : (
                    <Choose
                      key={index}
                      title={question.enunciado}
                      correct={
                        question.alternativas!.filter(
                          (alternative) =>
                            alternative.selecionada &&
                            alternative.correta === true
                        ).length > 0
                      }
                      alternatives={question.alternativas!.map(
                        (alternative) => ({
                          text: alternative.texto,
                          correct: alternative.correta,
                          selected: alternative.selecionada,
                        })
                      )}
                      type={question.tipo}
                    />
                  )}
                </>
              )
            )}

            {/* <Dissertative /> */}
            {/* <Choose type="UNICA_ESCOLHA" /> */}
            {/* <Choose type="MULTIPLA_ESCOLHA" /> */}
          </div>

          <Button
            size="small"
            color="solid_white"
            text="Salvar"
            submit={true}
            handleOnClick={handleSubmitCorrectionData}
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
