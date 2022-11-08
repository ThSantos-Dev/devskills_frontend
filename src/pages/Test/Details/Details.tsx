import { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/shared/Layout/Container/Container";
import Preview from "../../../components/shared/Test/Preview/Preview";
import { TTestRealize } from "../../../types/devskills/test/TTestRealize";
import Button from "./../../../components/shared/Form/Button/Button";
import styles from "./Details.module.css";

interface Props {}

const Details = (props: Props) => {
  const [testData, setTestData] = useState<TTestRealize>({
    id: 76,
    data_inicio: "2022-10-28T00:00:00.000Z",
    data_fim: "2022-10-31T00:00:00.000Z",
    duracao: "01:00:20",
    idEmpresa: 2,
    idProva: 149,
    prova: {
      id: 149,
      titulo: "Prova teórica",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ativo: true,
      link_repositorio: "",
      ultima_atualizacao: null,
      idProvaTipo: 1,
      provasTodasQuestoes: [
        {
          id: 81,
          idQuestaoProva: 107,
          idProva: 149,
          questaoProva: {
            alternativaProva: [
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 41,
                idQuestaoProva: 107,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 42,
                idQuestaoProva: 107,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 43,
                idQuestaoProva: 107,
              },
            ],
            id: 107,
            enunciado:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            foto: "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2Fe8e2ba0-810-f605-30a0-756db138b6f?alt=media&token=68480ae2-fc78-4251-9ebe-8febc07cf86c",
            questaoProvaTipo: {
              tipo: "MULTIPLA_ESCOLHA",
              id: 1,
            },
          },
        },
        {
          id: 82,
          idQuestaoProva: 108,
          idProva: 149,
          questaoProva: {
            alternativaProva: [],
            id: 108,
            enunciado:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
            foto: "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2Fcfe4408-56c7-d65f-330f-2553b62ad7f?alt=media&token=a3f72ed0-80c3-4ae8-866e-a3c60139ffb5",
            questaoProvaTipo: {
              tipo: "DISSERTATIVA",
              id: 3,
            },
          },
        },
        {
          id: 83,
          idQuestaoProva: 109,
          idProva: 149,
          questaoProva: {
            alternativaProva: [
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 23,
                idQuestaoProva: 109,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 432,
                idQuestaoProva: 109,
              },
              {
                opcao:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                id: 12,
                idQuestaoProva: 109,
              },
            ],
            id: 109,
            enunciado:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ",
            foto: "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2F4ffb1a2-78b8-52d-d543-14fa2b8327a?alt=media&token=dd6a3084-af5d-4baf-8ac4-8990b5bbac95",
            questaoProvaTipo: {
              tipo: "UNICA_ESCOLHA",
              id: 2,
            },
          },
        },
      ],
    },
  });

  const navigate = useNavigate();

  const handleApplyTest = () => {
  }
  // Implementar lógica para aplicação de Provas prontas

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <div
            onClick={() => navigate("/company/test/aplly")}
            className={styles.icon}
          >
            <IoArrowBackCircleOutline />
          </div>
          <h1>Detalhes da prova</h1>
          <Button color="solid_gray" size="small" text="Aplicar" />
        </div>

        <div className={styles.content_container}>
          <header>
            <h2>Informações gerais</h2>

            <ul className={styles.list_details}>
              <li>
                <h3>Quantidade de questões: </h3>
                <div className={styles.question_info}>
                  <div>
                    <h4>Dissertativas:</h4>
                    <span>3</span>
                  </div>
                  <div>
                    <h4>Múltipla seleção:</h4>
                    <span>5</span>
                  </div>
                  <div>
                    <h4>Única escolha:</h4>
                    <span>2</span>
                  </div>
                </div>
                <span>Total: 10</span>
              </li>
              <li>
                <h3>Tecnologias:</h3>
                <span>HTML5, CSS3 e JavaScript</span>
              </li>
              <li>
                <h3>Última atualização em:</h3>
                <span> 22/09/2022 ás 14:30:04</span>
              </li>
              <li>
                <h3>Descrição sugerida: </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </li>
            </ul>
          </header>

          <div className={styles.question_container}>
            <h2>Questões:</h2>
            <Preview testData={testData} buttonControll={false} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
