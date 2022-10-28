import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Input from "../../../../components/shared/Form/Input/Input";
import { TTestRealize } from "../../../../types/devskills/test/TTestRealize";
import { TTestRealizeQuestionResponse } from "../../../../types/devskills/test/TTRealizeResponse";
import Button from "./../../../../components/shared/Form/Button/Button";

import styles from "./RealizeTest.module.css";

interface Props {}

const RealizeTest: React.FC<Props> = () => {
  // Recupera o ID da prova
  const { id } = useParams<string>();

  const [testData, setTestData] = useState<TTestRealize>({
    id: 76,
    data_inicio: "2022-10-28T00:00:00.000Z",
    data_fim: "2022-10-31T00:00:00.000Z",
    duracao: "15:39:00",
    idEmpresa: 2,
    idProva: 149,
    prova: {
      id: 149,
      titulo: "Prova teórica",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ativo: true,
      link_repositorio: "",
      ultima_atualizacao: null,
      idProvaTipo: 1,
      provasTodasQuestoes: [
        {
          id: 81,
          idQuestaoProva: 107,
          idProva: 149,
          questaoProva: {
            alternativaProva: [
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 41,
                idQuestaoProva: 107,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 42,
                idQuestaoProva: 107,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 43,
                idQuestaoProva: 107,
              },
            ],
            id: 107,
            enunciado:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            foto: "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2Fe8e2ba0-810-f605-30a0-756db138b6f?alt=media&token=68480ae2-fc78-4251-9ebe-8febc07cf86c",
            questaoProvaTipo: {
              tipo: "MULTIPLA_ESCOLHA",
              id: 1,
            },
          },
        },
        {
          id: 82,
          idQuestaoProva: 108,
          idProva: 149,
          questaoProva: {
            alternativaProva: [],
            id: 108,
            enunciado:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
            foto: "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2Fcfe4408-56c7-d65f-330f-2553b62ad7f?alt=media&token=a3f72ed0-80c3-4ae8-866e-a3c60139ffb5",
            questaoProvaTipo: {
              tipo: "DISSERTATIVA",
              id: 3,
            },
          },
        },
        {
          id: 83,
          idQuestaoProva: 109,
          idProva: 149,
          questaoProva: {
            alternativaProva: [
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 23,
                idQuestaoProva: 109,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 432,
                idQuestaoProva: 109,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 12,
                idQuestaoProva: 109,
              },
            ],
            id: 109,
            enunciado:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
            foto: "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2F4ffb1a2-78b8-52d-d543-14fa2b8327a?alt=media&token=dd6a3084-af5d-4baf-8ac4-8990b5bbac95",
            questaoProvaTipo: {
              tipo: "UNICA_ESCOLHA",
              id: 2,
            },
          },
        },
      ],
    },
  });

  const [responseData, setResponseData] = useState<any[]>(
    testData.prova.provasTodasQuestoes.map((question: any) => {
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
    })
  );

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

    console.log(responses);

    setResponseData(responses);
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
          <span>{"00:15:00"}</span>
        </div>
      </div>

      {testData &&
        testData.prova.provasTodasQuestoes.map((question) => (
          <>
            <div className={styles.question}>
              <p>{question.questaoProva.enunciado}</p>

              {question.questaoProva.foto && (
                <div>
                  <img src={question.questaoProva.foto} alt="ilustration" />
                </div>
              )}

              {question.questaoProva.questaoProvaTipo.tipo ===
                "DISSERTATIVA" && (
                <Input
                  type="text"
                  name="response"
                  placeholder="Digite sua resposta"
                />
              )}

              {question.questaoProva.questaoProvaTipo.tipo ===
                "UNICA_ESCOLHA" && (
                <div
                  className={`${styles.alternatives_container}  ${styles.single}`}
                >
                  {question.questaoProva.alternativaProva.map((alternative) => (
                    <div className={`${styles.alternative} ${styles.selected}`}>
                      <button
                        onClick={() =>
                          addResponse(
                            question.idQuestaoProva,
                            "UNICA_ESCOLHA",
                            alternative.id
                          )
                        }
                      >
                        <AiOutlineCheck />
                      </button>
                      <p>{alternative.opcao}</p>
                    </div>
                  ))}
                </div>
              )}

              {question.questaoProva.questaoProvaTipo.tipo ===
                "MULTIPLA_ESCOLHA" && (
                <div
                  className={`${styles.alternatives_container}  ${styles.multiple}`}
                >
                  {question.questaoProva.alternativaProva.map((alternative) => (
                    <div className={`${styles.alternative} ${styles.selected}`}>
                      <button
                        onClick={() =>
                          addResponse(
                            question.idQuestaoProva,
                            "MULTIPLA_ESCOLHA",
                            alternative.id
                          )
                        }
                      >
                        <AiOutlineCheck />
                      </button>
                      <p>{alternative.opcao}</p>
                    </div>
                  ))}
                </div>
              )}

              <Button color="solid_white" size="small" text="Próxima questão" />
            </div>
          </>
        ))}
    </div>
  );
};

export default RealizeTest;
