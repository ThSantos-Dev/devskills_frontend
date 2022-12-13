import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../components/shared/Form/Button/Button";
import Container from "../../../components/shared/Layout/Container/Container";
import TestConfig, {
  TTestConfigData,
} from "../../../components/shared/Test/Config/TestConfig";
import Preview from "../../../components/shared/Test/Preview/Preview";
import { getTemplateById } from "../../../slices/common/testSlice";
import { TTestTemplateDetails } from "../../../types/devskills/test/TTestTemplateDetails";
import styles from "./ApplicationDetails.module.css";

interface Props {}

const ApplicationDetails = (props: Props) => {
  const { id } = useParams();

  const [idToast, setIdToast] = useState<any>();

  const { test, success, loading, error } = useSelector<
    any,
    { test: TTestTemplateDetails; loading: boolean; success: any; error: any }
  >((state: any) => state.test);
  const dispatch = useDispatch<any>();

  const [testConfig, setTestConfig] = useState<TTestConfigData>({
    data_inicio: "",
    data_fim: "",
    duracao: "",
    ids_stacks: [],
    ids_habilidades: [],
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  // State de que controla os erros
  const [errors, setErrors] = useState({
    skills: { error: false, message: "" },
    stacks: { error: false, message: "" },
    initialDate: { error: false, message: "" },
  });

  const navigate = useNavigate();

  const handleValidate = (): boolean => {
    setErrors({
      ...errors,
      initialDate: {
        error: false,
        message: "",
      },
    });

    if (new Date(testConfig.data_inicio) > new Date(testConfig.data_fim)) {
      toast.error("A data inicial não pode ser maior que a data final.");
      setErrors({
        ...errors,
        initialDate: {
          error: true,
          message: "A data inicial não pode ser maior que a data final.",
        },
      });
      return false;
    }

    return true;
  };

  const handleApplyTest = () => {
    if (!handleValidate()) return;


    const data = {
      id_prova: test.id,
      data_inicio: testConfig.data_inicio,
      data_fim: testConfig.data_fim,
      duracao: testConfig.duracao ? testConfig.duracao + ":00" : null,
    };

    // dispatch(applyTemplate(data));
  };

  useEffect(() => {
    if (!id) return;

    dispatch(getTemplateById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!testConfig.data_inicio) return;

    if (loading && !idToast) setIdToast(toast.loading("Processando..."));

    if (success) {
      toast.update(idToast, {
        render: success,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      navigate("/company/mytests");
    }

    if (error) {
      toast.update(idToast, {
        render: error,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error, loading]);

  if (!test?.provas) return <p>Carregando...</p>;

  return (
    <Container
      backTo="/company/test/templates"
      title={`Detalhes da prova - ${
        test.provas.titulo ? test.provas.titulo : ""
      }`}
    >
      {test.provas && (
        <div className={styles.container}>
          <div className={styles.content_container}>
            <header>
              <h2>Informações gerais</h2>

              <ul className={styles.list_details}>
                {!test?.provas.link_repositorio ? (
                  <li>
                    <h3>Quantidade de questões: </h3>
                    <div className={styles.question_info}>
                      <div>
                        <h4>Dissertativas:</h4>
                        <span>
                          {
                            test?.provas.provasTodasQuestoes.filter(
                              (question) =>
                                question.questaoProva.questaoProvaTipo.tipo ===
                                "DISSERTATIVA"
                            ).length
                          }
                        </span>
                      </div>
                      <div>
                        <h4>Múltipla seleção:</h4>
                        <span>
                          {
                            test?.provas.provasTodasQuestoes.filter(
                              (question) =>
                                question.questaoProva.questaoProvaTipo.tipo ===
                                "MULTIPLA_ESCOLHA"
                            ).length
                          }
                        </span>
                      </div>
                      <div>
                        <h4>Única escolha:</h4>
                        <span>
                          {
                            test?.provas.provasTodasQuestoes.filter(
                              (question) =>
                                question.questaoProva.questaoProvaTipo.tipo ===
                                "UNICA_ESCOLHA"
                            ).length
                          }
                        </span>
                      </div>
                    </div>
                    <span>
                      Total: {test?.provas.provasTodasQuestoes.length}
                    </span>
                  </li>
                ) : (
                  <p>
                    Repositório no GitHub{" "}
                    <a
                      href={test.provas.link_repositorio}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {test.provas.link_repositorio}
                    </a>
                  </p>
                )}
                <li>
                  <h3>Tecnologias:</h3>
                  <span>
                    {test?.provas.provaHabilidade
                      .map(
                        (skill: { habilidade: { nome: string } }) =>
                          skill.habilidade.nome
                      )
                      .toString()
                      .replaceAll(",", ", ")}
                    .
                  </span>
                </li>
                <li>
                  <h3>Aplicada por:</h3>
                  <span>{test?.provas.provaAndamento.length} empresas</span>
                </li>
                <li>
                  <h3>Descrição: </h3>
                  <p>{test?.provas.descricao}</p>
                </li>
              </ul>
            </header>

            <div className={styles.question_container}>
              <div className={styles.title_container}>
                <h2>Questões:</h2>
              </div>

              <Preview testData={test} buttonControll={false} />

              <div className={styles.button_container}>
                <Button
                  color="solid_white"
                  size="small"
                  text="Aplicar"
                  onClick={() => {
                    setShowModal(true);
                    document.body.style.overflow = "hidden";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={
          !showModal
            ? `${styles.modal_container} ${styles.close}`
            : styles.modal_container
        }
      >
        <div className={styles.modal}>
          <div
            className={styles.close}
            onClick={() => {
              setShowModal(false);
              document.body.style.overflow = "auto";
            }}
          >
            <IoClose title="Fechar" />
          </div>

          <h2>Estamos quase lá...</h2>
          <TestConfig
            readyProof={true}
            errors={errors}
            setErrors={(state: any) => setErrors(state)}
            getData={(data) => setTestConfig({ ...testConfig, ...data })}
          />

          <div className={styles.button_container}>
            <Button
              color="solid_white"
              size="small"
              text="Cancelar"
              onClick={() => {
                setShowModal(false);
                document.body.style.overflow = "auto";
              }}
            />
            <Button
              color="solid_white"
              size="small"
              text="Aplicar"
              onClick={handleApplyTest}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ApplicationDetails;
