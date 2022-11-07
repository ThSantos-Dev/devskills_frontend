import styles from "./Preview.module.css";

import { TTestRealize } from "../../../../types/devskills/test/TTestRealize";
import Alternative from "../../../developer/Test/Realize/Alternative/Alternative";
import Button from "../../Form/Button/Button";
import Input from "./../../Form/Input/Input";

interface Props {
  testData: TTestRealize;
  buttonControll: boolean;
}

const Preview = ({ testData, buttonControll }: Props) => {
  return (
    <>
      {testData &&
        testData.prova.provasTodasQuestoes.map((question, index) => (
          <div className={styles.question} key={question.idQuestaoProva}>
            <span>Questão {index + 1}</span>
            <p>{question.questaoProva.enunciado}</p>

            {question.questaoProva.foto && (
              <div className={styles.image}>
                <img src={question.questaoProva.foto} alt="ilustration" />
              </div>
            )}

            {question.questaoProva.questaoProvaTipo.tipo === "DISSERTATIVA" && (
              <Input
                type="text"
                name="response"
                handleOnChange={(value) => {}}
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
                    addResponse={
                      () => {}
                      //   addResponse(
                      //     question.idQuestaoProva,
                      //     "UNICA_ESCOLHA",
                      //     alternative.id
                      //   )
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
                      //   addResponse(
                      //     question.idQuestaoProva,
                      //     "MULTIPLA_ESCOLHA",
                      //     alternative.id
                      //   );
                    }}
                    alternative={alternative}
                    key={alternative.id}
                    type={"MULTIPLA_ESCOLHA"}
                    selected={false}
                  />
                ))}
              </div>
            )}

            {buttonControll && (
              <div className={styles.buttons_container}>
                {index !== 0 && (
                  <Button
                    color="solid_white"
                    size="small"
                    text="Anterior"
                    //   handleOnClick={previousTabQuestion}
                  />
                )}

                {index !== testData.prova.provasTodasQuestoes.length - 1 ? (
                  <Button
                    color="solid_white"
                    size="small"
                    text="Próxima"
                    //   handleOnClick={nextTabQuestion}
                  />
                ) : (
                  <Button
                    color="solid_white"
                    size="small"
                    text="Finalizar"
                    //   handleOnClick={() => console.log(responseData)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default Preview;
