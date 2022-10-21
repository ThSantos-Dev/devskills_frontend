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

    questoes: [],
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

  // Remove uma questão
  const deleteQuestion = (index: any) => {
    const fields = testData;
    fields.questoes!.splice(index, 1);

    setTestData({ ...fields });
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
      if (value === null) {
        const correctAlternatives = fields.questoes![
          indexQuestion
        ].alternativas!.filter((alternative) => alternative.correto === true);

        if (correctAlternatives.length === 1) {
          // Alterando o valor de todas as alternativas para null
          const alternatives = fields.questoes![
            indexQuestion
          ].alternativas!.map((alternative) => {
            return { texto: alternative.texto, correto: null };
          });

          // Atribuindo ao fields
          fields.questoes![indexQuestion].alternativas = alternatives;
        } else {
          // Atribuindo ao fields
          fields.questoes![indexQuestion].alternativas![indexAlternative] = {
            texto:
              fields.questoes![indexQuestion].alternativas![indexAlternative]
                .texto,
            correto: false,
          };
        }
      } else if (value) {
        // Alterando o valor de todas as alternativas para false
        const alternatives = fields.questoes![indexQuestion].alternativas!.map(
          (alternative) => {
            return { texto: alternative.texto, correto: false };
          }
        );

        // Atribuindo ao fields
        fields.questoes![indexQuestion].alternativas = alternatives;

        // Atribuindo o value passado para a alternativa especifica
        fields.questoes![indexQuestion].alternativas![indexAlternative] = {
          texto:
            fields.questoes![indexQuestion].alternativas![indexAlternative]
              .texto,
          correto: value,
        };
      }
    } else {
      if (value === null) {
        const correctAlternatives = fields.questoes![
          indexQuestion
        ].alternativas!.filter((alternative) => alternative.correto === true);

        if (correctAlternatives.length === 1) {
          // Alterando o valor de todas as alternativas para null
          const alternatives = fields.questoes![
            indexQuestion
          ].alternativas!.map((alternative) => {
            return { texto: alternative.texto, correto: null };
          });

          // Atribuindo ao fields
          fields.questoes![indexQuestion].alternativas = alternatives;
        } else {
          // Atribuindo ao fields
          fields.questoes![indexQuestion].alternativas![indexAlternative] = {
            texto:
              fields.questoes![indexQuestion].alternativas![indexAlternative]
                .texto,
            correto: false,
          };
        }
      } else if (value) {
        // Alterando o valor de todas as alternativas para false
        const alternatives = fields.questoes![indexQuestion].alternativas!.map(
          (alternative) => {
            return {
              texto: alternative.texto,
              correto: alternative.correto ? alternative.correto : false,
            };
          }
        );

        // Atribuindo ao fields
        fields.questoes![indexQuestion].alternativas = alternatives;

        // Atribuindo o value passado para a alternativa especifica
        fields.questoes![indexQuestion].alternativas![indexAlternative] = {
          texto:
            fields.questoes![indexQuestion].alternativas![indexAlternative]
              .texto,
          correto: value,
        };
      }
    }

    console.log(fields.questoes![indexQuestion].alternativas);

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
              handleOnDelete={() => deleteQuestion(index)}
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
