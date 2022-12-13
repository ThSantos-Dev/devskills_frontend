import styles from './Home.module.css';


// Ilustrçãoes
import HeaderIlustration from "../../../assets/img/company-home-ilsutration.svg";

import { IoAddCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import Container from "../../../components/shared/Layout/Container/Container";
import { useNavigate } from 'react-router-dom';

interface Props {}

const Home = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);

  const navigate = useNavigate()

  return (
    <Container>
      <div className={styles.container}>
        <header>
          <div className={styles.text}>
            <h1>Bem vindo de volta, {user.name}!</h1>
            <p>
              Você tem x notificações não lidas e 5 provas ativas. Visualize
              suas provas ou crie uma nova!
            </p>
          </div>
          <div className={styles.ilustration}>
            <img src={HeaderIlustration} alt="ilustração" />
          </div>
        </header>

        <div className={styles.actions_container}>
          <h2>Ações rápidas</h2>

          <div className={styles.actions}>
            <div
              className={styles.action}
              onClick={() => navigate("/company/groups/create")}
            >
              <span className={styles.icon}>
                <IoAddCircleSharp />
              </span>

              <span>Criar grupo</span>
            </div>
            <div
              className={styles.action}
              onClick={() => navigate("/company/test/create")}
            >
              <span className={styles.icon}>
                <IoAddCircleSharp />
              </span>

              <span>Criar prova</span>
            </div>
            <div
              className={styles.action}
              onClick={() => navigate("/company/test/templates")}
            >
              <span className={styles.icon}>
                <IoAddCircleSharp />
              </span>

              <span>Aplicar prova</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
