// Syles
import styles from "./CreateTest.module.css";

// Hooks

// Components
import { FormEvent, useState } from "react";
import TestConfig from "../../../components/shared/Test/Config/TestConfig";
import TestDescription from "../../../components/shared/Test/Description/TestDescription";
import TestQuestion from "../../../components/shared/Test/Question/TestQuestion";
import QuestionContainer from "../../../components/shared/Test/QuestionContainer/QuestionContainer";

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
            texto: "teste1",
            correto: null,
          },
          {
            texto: "teste2",
            correto: null,
          },
          {
            texto: "teste3",
            correto: null,
          },
        ],
      },
      {
        enunciado: "",
        id_tipo: 2,
        tipo: "MULTIPLA_ESCOLHA",

        alternativas: [
          {
            texto: "",
            correto: false,
          },
          {
            texto: "",
            correto: true,
          },
          {
            texto: "",
            correto: null,
          },
          {
            texto: "",
            correto: false,
          },
          {
            texto: "",
            correto: null,
          },
        ],
      },
    ],
  });

  // Resgata os dadosda descrição
  const getDesciptionData = (data: {
    titulo: string;
    descricao: string;
    link_repositorio: string;
  }) => {
    setTestData({ ...testData, ...data });
  };

  // Resgata os dados das configurações
  const getConfigData = (data: {
    data_inicio: string;
    data_fim: string;
    duracao: string;
  }) => {
    setTestData({ ...testData, ...data });
  };

  // Adiciona uma questão
  const addQuestion = () => {
    setTestData({
      ...testData,
      questoes: [
        ...testData.questoes!,
        { enunciado: "", id_tipo: 2, tipo: "DISSERTATIVA", alternativas: [] },
      ],
    });
  };

  // Adiciona uma alternativa em uma questão
  const addAternativeToSpecificOption = (index: any) => {
    const fields = testData;
    fields.questoes![index]!.alternativas!.push({ texto: "", correto: null });
    setTestData({ ...fields });
  };

  const deleteQuestionAlternative = (
    indexQuestion: any,
    indexAlternative: any
  ) => {
    console.log(
      testData.questoes![indexQuestion].alternativas![indexAlternative]
    );

    const fields = testData;
    fields.questoes![indexQuestion]!.alternativas!.splice(indexAlternative, 1);
    console.log(testData);

    setTestData({ ...fields });
  };

  const handleOnChangeAlternative = (
    value: string,
    indexQuestion: any,
    indexAlternative: any
  ) => {
    const fields = testData;
    fields.questoes![indexQuestion].alternativas![indexAlternative] = {
      texto: value,
      correto:
        fields.questoes![indexQuestion].alternativas![indexAlternative].correto,
    };

    console.log(fields.questoes![indexQuestion].alternativas);

    setTestData({ ...fields });
  };

  const handleOnSelectAlternativeCorrect = (
    value: boolean | null,
    indexQuestion: any,
    indexAlternative: any,
    type?: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA" 
  ) => {
    const fields = testData;

    if (type === "UNICA_ESCOLHA") {

      if(typeof value === "boolean") 

      fields.questoes![indexQuestion].alternativas![indexAlternative] = {
        texto:
          fields.questoes![indexQuestion].alternativas![indexAlternative].texto,
        correto: value,
      };
    } else {
      
    }

    setTestData({ ...fields });
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

      <QuestionContainer addQuestion={addQuestion}>
        {testData.questoes &&
          testData.questoes.map((question, index) => (
            <TestQuestion
              setType={question.tipo}
              key={index}
              options={question.alternativas && question.alternativas}
              addAlternative={() => addAternativeToSpecificOption(index)}
              deleteQuestionAlternative={deleteQuestionAlternative}
              handleOnChangeAlternative={handleOnChangeAlternative}
              handleOnSelectAlternativeCorrect={
                handleOnSelectAlternativeCorrect
              }
              indexQuestion={index}
            />
          ))}
      </QuestionContainer>

      <input type="submit" value="enviar" />
    </form>
  );
};

export default CreateTest;
