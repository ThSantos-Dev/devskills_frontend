// Styles
import styles from "./Login.module.css";

// SVG
import ilustration from "../../../assets/img/admin-ilustration-login.svg";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormLogin from "./Form/FormLogin";

const Login = () => {
  return (
    <AuthContainer
      ilustration={{ src: ilustration, alt: "ilustração" }}
      position="center"
    >
      <div className={styles.container}>
        <AuthHeader title="Entrar" subtitle="Entre na sua conta">
          <p>
            Obrigado por retornar a DevSkills, acesse sua conta para ver as
            novidades.
          </p>
        </AuthHeader>

        <FormLogin />
      </div>
    </AuthContainer>
  );
};

export default Login;
