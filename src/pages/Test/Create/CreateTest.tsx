// Syles
import styles from "./CreateTest.module.css";

// Hooks

// Components
import TestDescription from "../../../components/shared/Test/Description/TestDescription";
import TestConfig from "../../../components/shared/Test/Config/TestConfig";
import QuestionContainer from "../../../components/shared/Test/QuestionContainer/QuestionContainer";
import TestQuestion from "../../../components/shared/Test/Question/TestQuestion";
import { FormEvent, useState } from "react";

import { TTestRegister } from "../../../types/devskills/test/TTestRegister";

// Interface
interface Props {}

const CreateTest = (props: Props) => {
  // State responsável por armazenar os dados da prova
  const [testData, setTestData] = useState<TTestRegister>({
    titulo: "",
    id_criador: 1,
    tipo_criador: "EMPRESA",
    descricao: "",
    link_repositorio: "",

    data_inicio: "",
    data_fim: "",
    duracao: "",

    id_tipo: 1,
    tipo: "TEORICA",
    ids_habilidades: [1, 2, 3],
    ids_stacks: [2, 3, 5],

    questoes: [
      {
        enunciado: "",
        id_tipo: 2,
        tipo: "DISSERTATIVA",
      },
      {
        enunciado: "",
        id_tipo: 2,
        tipo: "UNICA_ESCOLHA",

        alternativas: [
          {
            texto: "",
            correto: null,
          },
        ],
      },
    ],
  });

  const getDesciptionData = (data: {
    titulo: string;
    descricao: string;
    link_repositorio: string;
  }) => {
    setTestData({ ...testData, ...data });
  };

  const getConfigData = (data: {
    data_inicio: string;
    data_fim: string;
    duracao: string;
  }) => {
    setTestData({ ...testData, ...data });
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(testData);
      }}
    >
      <TestDescription getData={getDesciptionData} />

      <TestConfig getData={getConfigData} />

      <QuestionContainer>
        <TestQuestion setType="DISSERTATIVA" />

        <TestQuestion setType="UNICA_ESCOLHA" />

        <TestQuestion setType="DISSERTATIVA" />
      </QuestionContainer>

      <input type="submit" value="enviar" />
    </form>
  );
};

export default CreateTest;
