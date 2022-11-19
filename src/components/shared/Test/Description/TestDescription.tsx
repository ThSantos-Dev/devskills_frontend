// Styles
import styles from "./TestDescription.module.css";

// Icon
import { ChangeEvent, useState } from "react";
import { BsGithub } from "react-icons/bs";
import Input from "./../../Form/Input/Input";

interface Props {
  readProof?: boolean;
  getData(data: {
    titulo: string;
    descricao: string;
    link_repositorio: string;
  }): void;
}

const TestDescription: React.FC<Props> = ({ readProof, getData }) => {
  // Armazena os dados das inputs
  const [inputs, setInputs] = useState({
    titulo: "",
    descricao: "",
    link_repositorio: "",
  });

  // Atualiza os dados do state
  const handleOnChange = (value: string, name: string) => {
    getData({ ...inputs, [name]: value });
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className={styles.description_container}>
      <div className={styles.title}>
        <h2>Defina um título</h2>
        <input
          type="text"
          name="titulo"
          value={inputs.titulo}
          required
          placeholder="Título da prova"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e.target.value, e.target.name)
          }
        />
      </div>
      {/* <QuillEditor /> */}

      <div className={styles.description}>
        <h2>Insira uma descrição</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vitae
          cum, animi explicabo nulla hic esse culpa accusamus quae facilis,
          molestiae pariatur reprehenderit illo consectetur aliquam ad odit
          ullam eligendi?
        </p>

          <textarea
            rows={5}
            cols={20}
            wrap="hard"
            name="descricao"
            value={inputs.descricao}
            placeholder="Insira uma descrição"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleOnChange(e.target.value, e.target.name)
            }
          ></textarea>
      </div>

      {!readProof && (
        <div className={styles.link_github}>
          <h2>Código base:</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae cum, animi explicabo nulla hic esse culpa accusamus quae
            facilis, molestiae pariatur reprehenderit illo consectetur aliquam
            ad odit ullam eligendi?
          </p>

          <div className={styles.content}>
            <BsGithub />
            <input
              type="text"
              name="link_repositorio"
              placeholder="link do github"
              value={inputs.link_repositorio}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOnChange(e.target.value, e.target.name)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TestDescription;
