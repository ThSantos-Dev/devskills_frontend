import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/shared/Form/Button/Button";
import UserService from "../../../../services/apiDevSkills/dev/userService";
import { TTestInfo } from "../../../../types/devskills/test/TTestDetails";
import Container from "./../../../../components/shared/Layout/Container/Container";
import { reset, startTest } from "./../../../../slices/common/testSlice";
import styles from "./DetailsTest.module.css";

interface Props {}

const DetailsTest = (props: Props) => {
  const { id } = useParams();

  const [idToast, setIdToast] = useState<any>();

  const { test, loading, success, error } = useSelector(
    (state: any) => state.test
  );
  const dispatch = useDispatch<any>();
  const { user } = useSelector((state: any) => state.auth);
  const [testData, setTestData] = useState<TTestInfo>();
  const navigate = useNavigate();

  const handleStartTest = () => {
    dispatch(startTest(parseInt(id!)));
  };

  const searchTestData = () => {
    if (!id) return;

    UserService.getTestDetails(user.token, parseInt(id)).then((res) => {
      console.log(res);
      if (res.error) return toast.error(res.error);

      console.log(res.data);

      setTestData(res.data);
    });
  };

  useEffect(() => {
    if (loading && !idToast) setIdToast(toast.loading("Processando..."));

    if (success) {
      toast.update(idToast, {
        render: success.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      dispatch(reset());

      setTimeout(
        () => navigate(`/dev/test/realize/${id}?idUserTest=${success.data.id}`),
        4000
      );
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

  useEffect(() => {
    if (!id) return;
    searchTestData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container filter={false} backTo="/dev/home" title="Detalhes da Prova">
      {testData ? (
        <div className={styles.container}>
          <div className={styles.infosContainer}>
            <h2>{testData?.titulo}</h2>
            <div className={styles.companyProfile}>
              <div className={styles.image_container}>
                {testData.empresa.logo ? (
                  <img
                    src={testData.empresa.logo}
                    alt={testData.empresa.nome}
                  />
                ) : (
                  <MdOutlineImageNotSupported />
                )}
              </div>
              <span>{testData.empresa.nome}</span>
              <button onClick={() => navigate("/company/profile/1")}>
                Ver perfil
              </button>
            </div>

            <div className={styles.candidatesContainer}>
              <BsFillPersonFill />
              <span>{testData.totalCandidatos} candidatos</span>
            </div>

            <span>{testData.descricao}</span>
          </div>

          <div className={styles.line} />

          <div className={styles.detailsContainer}>
            <div>
              <div>
                <p>Tipo:</p>
                <span>
                  {testData.tipo === "TEORICA" ? "Te??rica" : "Pr??tica"}
                </span>
              </div>

              <div>
                <p>Habilidades:</p>
                <span>
                  {testData.tecnologias
                    .map((item) => item.habilidade.nome)
                    .toString()
                    .replaceAll(",", ", ")}
                  .
                </span>
              </div>

              <div>
                <p>Stacks</p>
                <span>
                  {" "}
                  {testData.stacks
                    .map((item) => item.stack.nome)
                    .toString()
                    .replaceAll(",", ", ")}
                  .
                </span>
              </div>
            </div>

            <div>
              <div>
                <p>Realizar at??:</p>
                <span>
                  {testData.dataFim
                    .split("-")
                    .reverse()
                    .join()
                    .replaceAll(",", "/")}
                </span>
              </div>

              <div>
                <p>Dura????o:</p>
                <span>{testData.duracao}</span>
              </div>
            </div>
          </div>

          <Button
            color="solid_white"
            size="small"
            text="Realizar"
            handleOnClick={handleStartTest}
          />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export default DetailsTest;
