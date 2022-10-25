// Styles
import styles from "./TestDescription.module.css";

// Icon
import { BsGithub } from "react-icons/bs";
import { ChangeEvent, useState } from "react";

interface Props {
  getData(data: {
    titulo: string;
    descricao: string;
    link_repositorio: string;
  }): void;
}

const TestDescription: React.FC<Props> = ({ getData }) => {
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

      {/* <QuillEditor /> */}
      <textarea
        name="descricao"
        value={inputs.descricao}
        placeholder="Insira uma descrição"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleOnChange(e.target.value, e.target.name)
        }
      ></textarea>

      <div className={styles.link_github}>
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
  );
};

export default TestDescription;
