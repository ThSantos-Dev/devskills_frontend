// Syles
import styles from "./CreateTest.module.css";

// Hooks

// Icons
import {
  AiFillCheckCircle,
  AiFillCheckSquare,
  AiFillCloseCircle,
  AiFillCloseSquare,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { BsCircle, BsGithub, BsSquare } from "react-icons/bs";
import { GrAddCircle, GrTrash } from "react-icons/gr";

// Components
import Accept from "../../../components/shared/Accept/Accept";
import Input from "../../../components/shared/Form/Input/Input";
import SelectCustom from "../../../components/shared/Form/Select/SelectCustom";
import QuillEditor from "./../../../components/shared/Test/QuillEditor/QuillEditor";

// Interface
interface Props {}

const CreateTest = (props: Props) => {
  return (
    <form className={styles.container}>
      <div className={styles.description_container}>
        <input type="text" name="" value="Título da prova" />

        <QuillEditor />

        <div className="link_github">
          <BsGithub size="40px" />
          <input type="text" name="" placeholder="link do github" />
        </div>
      </div>

      <div className="config_container">
        <h2>Configurações</h2>

        <div className="config">
          <div className="time_container">
            <Input name="initial_date" label="Data de início" type="date" />
            <Input name="end_date" label="Data de término" type="date" />

            <Accept
              name="duration"
              handleOnClick={(checked, name) => console.log(checked)}
            >
              <p>Definir duração de tempo</p>
            </Accept>

            <div className="duration_container">
              <Input name="time_duration" type="time" step={2} />
              <p>de duração</p>
            </div>
          </div>

          <div className="skills_container">
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

      <div className="questions_container">
        <div className="aside_bar">
          <div className="icon">
            <GrAddCircle />
          </div>
          <div className="icon">
            <BiImageAdd />
          </div>
          <div className="icon">
            <AiOutlineFileSearch />
          </div>
        </div>

        <div className="question_container">
          <div className="question_header">
            <div className="text">
              <input type="text" value="Pergunta" />
            </div>

            <div className="icon">
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

          <div className="question_body">
            <input type="text" value="Pergunta" />

            <input
              type="text"
              value="A pergunta será no formato dissertativo..."
            />
          </div>

          <div className="question_footer">
            <GrTrash />
          </div>
        </div>

        <div className="question_container">
          <div className="question_header">
            <div className="text">
              <input type="text" value="Pergunta" />
            </div>

            <div className="icon">
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

          <div className="question_body">
            <div className="alternative">
              <div className="icon">
                <AiFillCheckCircle />
              </div>
              <input type="text" />
              <div className="icon">
                <GrTrash />
              </div>
            </div>

            <div className="alternative">
              <div className="icon">
                <AiFillCloseCircle />
              </div>
              <input type="text" />
              <div className="icon">
                <GrTrash />
              </div>
            </div>

            <div className="outhers">
              <div className="icon">
                <BsCircle />
              </div>

              <div className="options">
                <span>Adicionar opção</span> ou
                <span>Adicionar "Outro"</span>
              </div>
            </div>
          </div>

          <div className="question_footer">
            <div className="icon">
              <GrTrash />
            </div>

            <div className={styles.switch_container}>
              <span>Várias opções</span>

              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
            </div>
          </div>
        </div>

        <div className="question_container">
          <div className="question_header">
            <div className="text">
              <input type="text" value="Pergunta" />
            </div>

            <div className="icon">
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

          <div className="question_body">
            <div className="alternative">
              <div className="icon">
                <AiFillCheckSquare />
              </div>
              <input type="text" />
              <div className="icon">
                <GrTrash />
              </div>
            </div>

            <div className="alternative">
              <div className="icon">
                <AiFillCloseSquare />
              </div>
              <input type="text" />
              <div className="icon">
                <GrTrash />
              </div>
            </div>

            <div className="outhers">
              <div className="icon">
                <BsSquare />
              </div>

              <div className="options">
                <span>Adicionar opção</span> ou
                <span>Adicionar "Outro"</span>
              </div>
            </div>
          </div>

          <div className="question_footer">
            <div className="icon">
              <GrTrash />
            </div>

            <div className={styles.switch_container}>
              <span>Várias opções</span>

              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTest;
