// Syles
import styles from "./CreateTest.module.css";

// Hooks
import uuid from "react-uuid";

// Components
import { FormEvent, useState } from "react";
import TestConfig from "../../../components/shared/Test/Config/TestConfig";
import TestDescription from "../../../components/shared/Test/Description/TestDescription";
import TestQuestion, {
  TQuestionData,
} from "../../../components/shared/Test/Question/TestQuestion";
import QuestionContainer from "../../../components/shared/Test/QuestionContainer/QuestionContainer";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import { storage } from "../../../firebase";
import { TTestRegister } from "../../../types/devskills/test/TTestRegister";

// Interface
interface Props {}

type TTestRegisterData = {
  titulo: string;
  descricao: string;
  link_repositorio?: string;

  data_inicio: string;
  data_fim: string;
  duracao: string;

  ids_habilidades: number[];
  ids_stacks: number[];

  questoes?: TQuestionData[];
};

const CreateTest = (props: Props) => {
  // State responsável por armazenar os dados da prova
  const [testData, setTestData] = useState<TTestRegisterData>({
    titulo: "",
    descricao: "",
    link_repositorio: "",

    data_inicio: "",
    data_fim: "",
    duracao: "",

    ids_habilidades: [1, 2, 3],
    ids_stacks: [2, 3, 5],

    questoes: [
      { enunciado: "Minha questão", tipo: "DISSERTATIVA", alternativas: [] },
    ],
  });

  // Controla a quantidade de imagens a serem enviadas para o firebase
  const [totalImagesToUpload, setTotalImagesToUpload] = useState<number>(0);
  const [totalImagesUploaded, setTotalImagesUploaded] = useState<number>(0);

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

    ids_stacks?: number[];
    ids_habilidades?: number[];
  }) => {
    setTestData({ ...testData, ...data });
  };

  // Adiciona uma questão
  const addQuestion = () => {
    setTestData({
      ...testData,
      questoes: [
        ...testData.questoes!,
        { enunciado: "", tipo: "DISSERTATIVA", alternativas: [] },
      ],
    });
  };

  // Remove uma questão
  const deleteQuestion = (index: any) => {
    const fields = testData;
    fields.questoes!.splice(index, 1);
    console.log(fields.questoes);

    setTestData({ ...fields });
  };

  // Resgata os dados da questão
  const handleOnChangeQuestion = (
    data: {
      enunciado: string;
      image?: { file: File | null; url: string };
      tipo: "DISSERTATIVA" | "MULTIPLA_ESCOLHA" | "UNICA_ESCOLHA";
    },
    index: any
  ) => {
    const fields = testData;
    fields.questoes![index] = {
      ...fields.questoes![index],
      image: data.image,
      enunciado: data.enunciado,
      tipo: data.tipo,
    };
    setTestData({ ...fields });
  };

  // Adiciona uma alternativa em uma questão
  const addAternativeToSpecificOption = (index: any) => {
    const fields = testData;
    fields.questoes![index]!.alternativas!.push({ texto: "", correto: null });
    setTestData({ ...fields });
  };

  // Remove uma alternativa de uma questão
  const deleteQuestionAlternative = (
    indexQuestion: any,
    indexAlternative: any
  ) => {
    const fields = testData;
    fields.questoes![indexQuestion]!.alternativas!.splice(indexAlternative, 1);


    setTestData({ ...fields });
  };

  // Resgata os dados da input da alternativa
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

    setTestData({ ...fields });
  };

  // Resgata os dados de "correto" da alternativa
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

    setTestData({ ...fields });
  };

  // Resgata todos os dados e formata para enviar ao slice
  const handleOnSubmit = () => {
    const fields = testData;

    // Verificando se há imagens nas questões para fazer o upload
    if (
      fields.questoes!.filter((questao) => (questao.image?.file ? true : false))
        .length > 0
    ) {
      setTotalImagesToUpload(
        fields.questoes!.filter((questao) =>
          questao.image?.file ? true : false
        ).length
      );

      // Realizando o upload das imagens para o firebase
      fields.questoes!.forEach((questao, index) => {
        if (!questao.image?.file) return;

        const storageRef = ref(storage, `images/${uuid()}`);
        const uploadTask = uploadBytesResumable(storageRef, questao.image.file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress + "%");
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              fields.questoes![index].image!.url = url;
              setTotalImagesUploaded(totalImagesUploaded + 1);
            });
          }
        );
      });

      return;
    }

    const testDataFormated: TTestRegister = {
      ...fields,
      id_criador: 1,
      id_tipo: 1,
      tipo_criador: "ADMIN",
      tipo: "TEORICA",
      questoes: fields.questoes!.map((questao) => ({
        enunciado: questao.enunciado,
        id_tipo: 2,
        tipo: questao.tipo,
        alternativas: questao.alternativas,
        img_url: questao.image?.url || "",
      })),
    };

    console.log("handle:", testDataFormated);
  };

  // Zera os state
  useEffect(() => {
    setTotalImagesToUpload(0);
    setTotalImagesUploaded(0);
  }, []);

  // Monitora se todas as imagens foram enviadas para o firebase
  useEffect(() => {
    if (totalImagesToUpload === totalImagesUploaded + 1) {
      console.log("useEffect:", testData);
    }
  }, [testData, totalImagesToUpload, totalImagesUploaded]);

  return (
    <form
      className={styles.container}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleOnSubmit();
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
              initialData={{
                enunciado: question.enunciado,
                image: question.image,
              }}
              options={question.alternativas && question.alternativas}
              handleOnChange={(data) => handleOnChangeQuestion(data, index)}
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
