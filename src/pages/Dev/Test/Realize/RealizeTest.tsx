import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TTestRealize } from "../../../../types/devskills/test/TTestRealize";

import { useDispatch, useSelector } from "react-redux";
import { getToRealizeById } from "../../../../slices/common/testSlice";

import Countdown from "react-countdown-simple";
import Alternative from "../../../../components/developer/Test/Realize/Alternative/Alternative";
import Button from "./../../../../components/shared/Form/Button/Button";
import Input from "./../../../../components/shared/Form/Input/Input";
import styles from "./RealizeTest.module.css";

interface Props {}

const RealizeTest: React.FC<Props> = () => {
  // Recupera o ID da prova
  // eslint-disable-next-line
  const { id } = useParams<string>();

  const { test, success, error, loading } = useSelector<
    any,
    { test: TTestRealize; success: boolean; error: boolean; loading: boolean }
  >((state) => state.test);

  const [timer, setTimer] = useState<string>("");

  // Cria um array com as respostas do usuário
  const [responseData, setResponseData] = useState<any[]>(
    test?.prova.provasTodasQuestoes.map((question: any) => {
      if (question.questaoProva.questaoProvaTipo.tipo !== "DISSERTATIVA") {
        return {
          id_questao: question.idQuestaoProva,
          id_alternativa:
            question.questaoProva.questaoProvaTipo.tipo === "UNICA_ESCOLHA"
              ? 0
              : question.questaoProva.alternativaProva.map(
                  (alternative: any) => {
                    return {
                      id_alternativa: alternative.id,
                      selected: false,
                    };
                  }
                ),
        };
      } else {
        return {
          id_questao: question.idQuestaoProva,
          resposta: "",
        };
      }
    }) || []
  );

  const dispatch = useDispatch<any>();

  // Busca os dados da prova
  useEffect(() => {
    if (!id) return;

    dispatch(getToRealizeById(parseInt(id)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!test?.duracao) return;

    const hours = parseInt(test.duracao.split(":")[0]);
    const minutes = parseInt(test.duracao.split(":")[1]);

    setTimer(
      new Date(
        new Date().setSeconds(
          new Date().getSeconds() + hours * 3600 + minutes * 60
        )
      ).toISOString()
    );
  }, [test]);

  // Armazena o progresso do usuário
  const [testProgress, setTestProgress] = useState<number>(0);

  const handleProgress = () => {
    let percentOfQuestion = Math.floor(100 / responseData.length);
    let numberOfResponses = 0;

    console.log(responseData);

    responseData.forEach((question) => {
      if (question?.resposta && question?.resposta.trim().length > 0) {
        console.log("entrei 01");
        return (numberOfResponses += 1);
      }

      if (question.id_alternativa?.length > 0) {
        console.log(question);
        if (
          question.id_alternativa.filter(
            (alternative: any) => alternative.selected === true
          ).length > 0
        ) {
          console.log("entrei 02");
          return (numberOfResponses += 1);
        }
      }

      if (question?.id_alternativa?.length < 1) {
        console.log("entrei 03", question?.id_alternativa);
        return (numberOfResponses += 1);
      }
    });

    console.log(percentOfQuestion, numberOfResponses);

    setTestProgress(percentOfQuestion * numberOfResponses);
  };

  // Marca a alternativa que o usuário escolheu
  const addResponse = (
    idQuestion: number,
    type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA",
    idAlternative: number
  ) => {
    let responses = responseData;

    if (type === "UNICA_ESCOLHA")
      responses.forEach((question: any, index: any) => {
        if (question.id_questao === idQuestion)
          responses[index].id_alternativa = idAlternative;
      });

    if (type === "MULTIPLA_ESCOLHA") {
      responses.forEach((question: any, index: any) => {
        if (question.id_questao === idQuestion) {
          responses[index].id_alternativa = question.id_alternativa.map(
            (alternative: any) => {
              if (alternative.id_alternativa === idAlternative)
                return {
                  id_alternativa: idAlternative,
                  selected: !alternative.selected,
                };

              return alternative;
            }
          );
        }
      });
    }

    setResponseData(responses);
  };

  // Recupera o texto da resposta dissertativa
  const handleOnChangeTextResponse = (index: any, value: string) => {
    const responses = responseData;

    responses[index].resposta = value;

    setResponseData(responses);
  };

  // Tabs of questions
  const [questionTab, setQuestionTab] = useState<any>(0);

  const nextTabQuestion = () => {
    let tab = questionTab + 1;
    if (tab > responseData.length - 1) return;

    setQuestionTab(tab);
    handleProgress();
  };

  const previousTabQuestion = () => {
    let tab = questionTab - 1;
    if (tab < 0) return;

    setQuestionTab(tab);
    handleProgress();
  };

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
          <p>Você concluiu {testProgress}% do teste.</p>
          <progress max="100" value={testProgress}>
            {testProgress}%
          </progress>
        </div>
      </header>

      <div className={styles.pages_questions}>
        <h3>Questões:</h3>

        <ul>
          {test &&
            test.prova.provasTodasQuestoes.map((_, index) => (
              <li
                key={index}
                className={questionTab === index ? styles.tab_selected : ""}
                onClick={() => setQuestionTab(index)}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.info_container}>
        <div>
          <Button color="solid_white" size="inherit" text="Salvar" />
        </div>

        <div className={styles.timer}>
          <p>Tempo restante:</p>
          {/* <span>{`${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</span> */}
          {timer && (
            <Countdown
              targetDate={timer}
              renderer={({ days, hours, minutes, seconds }) => (
                <span className={styles.countdown}>{`${hours.toString().padStart(2, "0")}:${minutes
                  .toString()
                  .padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`}</span>
              )}
            />
          )}
        </div>
      </div>

      {test &&
        test.prova.provasTodasQuestoes.map((question, index) => (
          <div
            className={`${styles.question} ${
              questionTab === index ? styles.active : styles.inactive
            }`}
            key={question.idQuestaoProva}
          >
            <span>Questão {index + 1}</span>
            <p>{question.questaoProva.enunciado}</p>

            {question.questaoProva.foto && (
              <div>
                <img src={question.questaoProva.foto} alt="ilustration" />
              </div>
            )}

            {question.questaoProva.questaoProvaTipo.tipo === "DISSERTATIVA" && (
              <Input
                type="text"
                name="response"
                handleOnChange={(value) =>
                  handleOnChangeTextResponse(index, value)
                }
                placeholder="Digite sua resposta"
              />
            )}

            {question.questaoProva.questaoProvaTipo.tipo ===
              "UNICA_ESCOLHA" && (
              <div
                className={`${styles.alternatives_container}  ${styles.single}`}
              >
                {question.questaoProva.alternativaProva.map((alternative) => (
                  <Alternative
                    addResponse={() =>
                      addResponse(
                        question.idQuestaoProva,
                        "UNICA_ESCOLHA",
                        alternative.id
                      )
                    }
                    alternative={alternative}
                    key={alternative.id}
                    type={"UNICA_ESCOLHA"}
                    selected={false}
                  />
                ))}
              </div>
            )}

            {question.questaoProva.questaoProvaTipo.tipo ===
              "MULTIPLA_ESCOLHA" && (
              <div
                className={`${styles.alternatives_container}  ${styles.multiple}`}
              >
                {question.questaoProva.alternativaProva.map((alternative) => (
                  <Alternative
                    addResponse={() => {
                      addResponse(
                        question.idQuestaoProva,
                        "MULTIPLA_ESCOLHA",
                        alternative.id
                      );
                    }}
                    alternative={alternative}
                    key={alternative.id}
                    type={"MULTIPLA_ESCOLHA"}
                    selected={false}
                  />
                ))}
              </div>
            )}

            <div className={styles.buttons_container}>
              {index !== 0 && (
                <Button
                  color="solid_white"
                  size="small"
                  text="Anterior"
                  handleOnClick={previousTabQuestion}
                />
              )}

              {index !== test.prova.provasTodasQuestoes.length - 1 ? (
                <Button
                  color="solid_white"
                  size="small"
                  text="Próxima"
                  handleOnClick={nextTabQuestion}
                />
              ) : (
                <Button
                  color="solid_white"
                  size="small"
                  text="Finalizar"
                  handleOnClick={() => console.log(responseData)}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RealizeTest;
