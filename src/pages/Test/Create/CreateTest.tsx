// Syles
import styles from "./CreateTest.module.css";

// Hooks

// Icons
import { AiOutlineCheck, AiOutlineFileSearch } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { BsCircle, BsGithub, BsSquare, BsFillTrashFill } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";

// Components
import Accept from "../../../components/shared/Accept/Accept";
import Input from "../../../components/shared/Form/Input/Input";
import SelectCustom from "../../../components/shared/Form/Select/SelectCustom";
import QuillEditor from "./../../../components/shared/Test/QuillEditor/QuillEditor";
import { useState } from "react";

// Interface
interface Props {}

const CreateTest = (props: Props) => {
  // Controla a exibição do relógio para definir duração
  const [showTime, setShowTime] = useState<boolean>(false);

  return (
    <form className={styles.container}>
      <div className={styles.description_container}>
        <input type="text" name="" value="Título da prova" />

        {/* <QuillEditor /> */}
        <textarea name="" id="" placeholder="Insira uma descrição"></textarea>

        <div className={styles.link_github}>
          <BsGithub />
          <input type="text" name="" placeholder="link do github" />
        </div>
      </div>

      <div className={styles.config_container}>
        <h2>Configurações</h2>

        <div className={styles.config}>
          <div className={styles.time_container}>
            <Input name="initial_date" label="Data de início" type="date" />
            <Input name="end_date" label="Data de término" type="date" />

            <Accept
              name="duration"
              handleOnClick={(checked) => setShowTime(checked)}
            >
              <p>Definir duração de tempo</p>
            </Accept>
            {showTime && (
              <div className={styles.duration_container}>
                <Input
                  name="time_duration"
                  type="time"
                  step={2}
                  placeholder="hh:mm:ss"
                />

                <span>(HH:MM:SS)</span>
              </div>
            )}
          </div>

          <div className={styles.skills_container}>
            <SelectCustom
              name="stacks"
              options={[{ label: "back-end", value: "1" }]}
              handleOnChange={(data) => console.log(data)}
              placeholder="Selecione"
              label="Stacks"
              isMulti={true}
              closeMenuOnSelect={false}
            />

            <SelectCustom
              name="tecnologies"
              options={[{ label: "php", value: "1" }]}
              handleOnChange={(data) => console.log(data)}
              placeholder="Selecione"
              label="Tecnologias"
              isMulti={true}
              closeMenuOnSelect={false}
            />
          </div>
        </div>
      </div>

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
                <BiImageAdd />
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

            <div className={styles.question_body}>
              <div className={styles.alternative_container}>
                <div
                  className={`${styles.alternative} ${
                    true ? styles.correct : ""
                  }`}
                >
                  <button className={styles.icon}>
                    {true && <AiOutlineCheck />}
                  </button>
                  <input type="text" />
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
                  <input type="text" />
                </div>

                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>

              <div className={styles.outhers_container}>
                <div className={styles.icon}>
                  <BsCircle />
                </div>

                <div className="options">
                  <span>Adicionar opção</span> ou
                  <span>Adicionar "Outro"</span>
                </div>
              </div>
            </div>

            <div className={styles.question_footer}>
              <div className={styles.icon}>
                <BsFillTrashFill />
              </div>

              <div className={styles.switch_container}>
                <span>Várias opções</span>

                <input type="checkbox" id="switch" />
                <label htmlFor="switch">Toggle</label>
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

            <div className={styles.question_body}>
              <div className="alternative">
                <div className={styles.icon}>
                  <AiOutlineCheck />
                </div>
                <input type="text" />
                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>

              <div className="alternative">
                <div className={styles.icon}>
                  <AiOutlineCheck />
                </div>
                <input type="text" />
                <div className={styles.icon}>
                  <BsFillTrashFill />
                </div>
              </div>

              <div className="outhers">
                <div className={styles.icon}>
                  <BsSquare />
                </div>

                <div className="options">
                  <span>Adicionar opção</span> ou
                  <span>Adicionar "Outro"</span>
                </div>
              </div>
            </div>

            <div className={styles.question_footer}>
              <div className={styles.icon}>
                <BsFillTrashFill />
              </div>

              <div className={styles.switch_container}>
                <span>Várias opções</span>

                <input type="checkbox" id="switch" />
                <label htmlFor="switch">Toggle</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTest;
