// Syles
import styles from "./CreateTest.module.css";

// Hooks

// Icons
import { AiOutlineCheck, AiOutlineFileSearch } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { BsCircle, BsFillTrashFill, BsGithub, BsSquare } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";

// Components
import { useState } from "react";
import Accept from "../../../components/shared/Accept/Accept";
import Input from "../../../components/shared/Form/Input/Input";
import SelectCustom from "../../../components/shared/Form/Select/SelectCustom";
import TestDescription from "../../../components/shared/Test/Description/TestDescription";
import TestConfig from "../../../components/shared/Test/Config/TestConfig";

// Interface
interface Props {}

const CreateTest = (props: Props) => {


  return (
    <form className={styles.container}>
      <TestDescription />

      <TestConfig />

      <div className={styles.questions_container}>
        <div className={styles.aside_bar}>
          <div className={styles.icon}>
            <MdOutlineAddCircleOutline fontSize="1.5rem" />
          </div>
          <div className={styles.icon}>
            <BiImageAdd />
          </div>
          <div className={styles.icon}>
            <AiOutlineFileSearch />
          </div>
        </div>

        <div className={styles.questions}>
          <div className={styles.question_container}>
            <div className={styles.question_header}>
              <div className={styles.text}>
                <input type="text" value="Pergunta" />
              </div>

              <div className={styles.icon}>
                <label htmlFor="a1">
                  <input type="file" id="a1" />
                  <BiImageAdd />
                </label>
              </div>

              <div className="select_container">
                <SelectCustom
                  placeholder="Selecione"
                  name="type_question"
                  options={[
                    { label: "dissertativa", value: "DISSERTATIVA" },
                    { label: "opcoes", value: "UNICA_ESCOLHA" },
                  ]}
                  handleOnChange={(value) => console.log(value)}
                />
              </div>
            </div>

            <div className={styles.question_body}>
              <img src="https://i.pinimg.com/564x/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg" />
              <p>A resposta será no formato dissertativo...</p>
            </div>

            <div className={styles.question_footer}>
              <div className={styles.icon}>
                <BsFillTrashFill />
              </div>
            </div>
          </div>

          <div className={styles.question_container}>
            <div className={styles.question_header}>
              <div className={styles.text}>
                <input type="text" value="Pergunta" />
              </div>

              <div className={styles.icon}>
                <BiImageAdd />
              </div>

              <div className="select_container">
                <SelectCustom
                  placeholder="Selecione"
                  name="type_question"
                  options={[
                    { label: "dissertativa", value: "DISSERTATIVA" },
                    { label: "multipla escolha", value: "UNICA_ESCOLHA" },
                  ]}
                  handleOnChange={(value) => console.log(value)}
                />
              </div>
            </div>

            <div className={`${styles.question_body} ${styles.single}`}>
              <img
                src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                alt=""
              />

              <div className={styles.alternative_container}>
                <div
                  className={`${styles.alternative} ${
                    true ? styles.correct : ""
                  }`}
                >
                  <button className={styles.icon}>
                    {true && <AiOutlineCheck />}
                  </button>
                  <input type="text" placeholder="Insira uma alternativa..." />
                </div>

                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>

              <div className={styles.alternative_container}>
                <div
                  className={`${styles.alternative} ${
                    false ? styles.correct : ""
                  }`}
                >
                  <button className={styles.icon}>
                    {false && <AiOutlineCheck />}
                  </button>
                  <input type="text" placeholder="Insira uma alternativa..." />
                </div>

                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>

              <div className={styles.outhers_container}>
                <div className={styles.icon}>
                  <BsCircle />
                </div>

                <div className={styles.options}>
                  <p>
                    <span>Adicionar opção</span> ou{" "}
                    <span>adicionar "Outro"</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.question_footer}>
              <div className={styles.icon}>
                <BsFillTrashFill />
              </div>

              <div className={styles.switch_container}>
                <span>Várias opções</span>

                <div className={styles.switch}>
                  <input type="checkbox" id="switch" />
                  <label htmlFor="switch">Toggle</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.question_container}>
            <div className={styles.question_header}>
              <div className={styles.text}>
                <input type="text" value="Pergunta" />
              </div>

              <div className={styles.icon}>
                <label htmlFor="a2">
                  <input type="file" id="a2" />
                  <BiImageAdd />
                </label>
              </div>

              <div className="select_container">
                <SelectCustom
                  placeholder="Selecione"
                  name="type_question"
                  options={[
                    { label: "dissertativa", value: "DISSERTATIVA" },
                    { label: "multipla escolha", value: "UNICA_ESCOLHA" },
                  ]}
                  handleOnChange={(value) => console.log(value)}
                />
              </div>
            </div>

            <div className={`${styles.question_body} ${styles.multiples}`}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />

              <div className={styles.alternative_container}>
                <div
                  className={`${styles.alternative} ${
                    true ? styles.correct : ""
                  }`}
                >
                  <button className={styles.icon}>
                    {true && <AiOutlineCheck />}
                  </button>
                  <input type="text" placeholder="Insira uma alternativa..." />
                </div>

                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>
              <div className={styles.alternative_container}>
                <div
                  className={`${styles.alternative} ${
                    false ? styles.correct : ""
                  }`}
                >
                  <button className={styles.icon}>
                    {true && <AiOutlineCheck />}
                  </button>
                  <input type="text" placeholder="Insira uma alternativa..." />
                </div>

                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>

              <div className={styles.outhers_container}>
                <div className={styles.icon}>
                  <BsSquare />
                </div>

                <div className={styles.options}>
                  <p>
                    <span>Adicionar opção</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.question_footer}>
              <div className={styles.icon}>
                <BsFillTrashFill />
              </div>

              <div className={styles.switch_container}>
                <span>Várias opções</span>

                <div className={styles.switch}>
                  <input type="checkbox" id="switch2" />
                  <label htmlFor="switch2">Toggle</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTest;
