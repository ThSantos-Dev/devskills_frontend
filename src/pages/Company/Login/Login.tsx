// React
import { FormEvent } from "react";

// Styles
import styles from "./Login.module.css";

// SVG
import ilustration from "../../../assets/img/company-ilustration-login.svg";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormLogin from "./Form/FormLogin";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../../../slices/company/authSlice";


const Login = () => {
  // Instanciando o Dispatch para poder utilizar as funções do Redux
  const dispatch = useDispatch<any>();

  // Realiza a requisição para o servidor
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>, data: any) => {
    e.preventDefault();

    // Adiona a função de login
    dispatch(login(data));
  };

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

        <FormLogin handleOnSubmit={handleOnSubmit} />
      </div>
    </AuthContainer>
  );
};

export default Login;
