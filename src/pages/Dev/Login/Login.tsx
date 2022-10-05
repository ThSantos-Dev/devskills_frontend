// Styles
import styles from "./Login.module.css";

// React
import { FormEvent, useState } from "react";

// Redux
import { useDispatch } from "react-redux";

// Reducer
import { login } from "../../../slices/authSlice";

// SVG
import ilustration from "../../../assets/img/dev-ilustration-login.svg";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import ForgotPassword from "../../../components/shared/ForgotPassword/ForgotPassword";
import FormLogin from "./Form/FormLogin";

const Login = () => {
  // State responsável por controlar a validação da Modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // Instanciando o Dispatch para poder utilizar as funções do Redux
  const dispatch = useDispatch<any>();

  // Realiza a requisição para o servidor
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>, data: any) => {
    e.preventDefault();

    // Adiona a função de login
    dispatch(login({ user: data, type: "DEV" }));
  };

  // Realiza a recuperação de senha
  const handleRetrievePassword = (email: string, type: string) => {
    // Implementar a lógica de recuperação de senha
  }

  return (
    <>
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

          <FormLogin
            handleOnSubmit={handleOnSubmit}
            openModal={() => setShowModal(!showModal)}
          />
        </div>
      </AuthContainer>

      {showModal && (
        <div className={styles.modal}>
          <ForgotPassword
            type="DEV"
            closeModal={() => setShowModal(!showModal)}
          />
        </div>
      )}
    </>
  );
};

export default Login;
