import { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import actionIcon from "../../../assets/img/actionIcon.svg";
import HeaderIlustration from "../../../assets/img/dev-home-illustration.svg";
import Container from "../../../components/shared/Layout/Container/Container";
import UserService from "../../../services/apiDevSkills/dev/userService";
import { TGetTestRecommeded } from "../../../types/devskills/test/TGetTestRecommeded";
import CardTest from "./CardTest";
import styles from "./Home.module.css";

type Props = {};

const Home = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [userName, setUserName] = useState<string>();

  const [recommendedTest, setRecommendedTest] =
    useState<TGetTestRecommeded[]>();

  const navigate = useNavigate();

  const getUser = () => {
    if (!user.id) return;

    UserService.getById(parseInt(user.id), user.token).then((res) => {
      if (res.error) return toast.error(res.error);
      setUserName(res.data.nome);
    });
  };

  const getRecommendedTests = () => {
    if (!user.token) return;

    UserService.getRecommendedTests(user.token).then((res) => {
      if (res.error) return toast.error(res.error);

      setRecommendedTest(res.data);
    });
  };

  useLayoutEffect(() => {
    getUser();
    getRecommendedTests();
  }, []);

  return (
    <Container>
      <header className={styles.containerHeader}>
        <div className={styles.text}>
          <h1>Bem-vindo, {userName && userName.split(" ")[0]}!</h1>
          <p>
            Estamos muito felizes com sua chegada! Confira as mais novas provas
            da nossa plataforma ou continue suas provas em andamento.
          </p>
        </div>
        <div className={styles.ilustration}>
          <img src={HeaderIlustration} alt="ilustração" />
        </div>
      </header>
      <div className={styles.testsContainer}>
        <div className={styles.testsContainerHeader}>
          <h1>Provas ideais para você</h1>
          {/* <p>ver mais...</p> */}
        </div>
        <div className={styles.cardContainer}>
          {recommendedTest &&
            recommendedTest.map(({ id, prova, empresa }, index) => (
              <CardTest
                key={index}
                title={prova.titulo}
                description={prova.descricao}
                logo_url={empresa.logo || null}
                skills={prova.provaHabilidade.map(
                  (skill) => skill.habilidade.nome
                )}
                stacks={prova.provaStack.map((stack) => stack.stack.nome)}
                handleOnClick={() => navigate(`/dev/test/${id}`)}
              />
            ))}
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <div className={styles.actionsContainerText}>
          <h3>Acessos rápidos</h3>
          <p>Conheça nossos atalhos feitos para melhorarem sua experiência.</p>
        </div>
        <div className={styles.line}></div>
        <div
          className={styles.action}
          onClick={() => navigate(`dev/groups/${user.id}`)}
        >
          <div>
            <img src={actionIcon} alt="Ícone de atalho" />
          </div>
          <p>Convites de grupos</p>
        </div>
        <div className={styles.action} onClick={() => navigate(`dev/search`)}>
          <div>
            <img src={actionIcon} alt="Ícone de atalho" />
          </div>
          <p>Buscar novas provas</p>
        </div>
        <div
          className={styles.action}
          onClick={() => navigate(`dev/profile/${user.id}`)}
        >
          <div>
            <img src={actionIcon} alt="Ícone de atalho" />
          </div>
          <p>Acessar suas provas</p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
