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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import ForgotPassword from "../../../components/shared/ForgotPassword/ForgotPassword";
import FormLogin, { TDevLoginData } from "./Form/FormLogin";

const Login = () => {
  // State responsável por controlar a validação da Modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // Monitorando o Redux de autenticação
  const { loading, error, success } = useSelector((state: any) => state.auth);

  // Instanciando o Dispatch para poder utilizar as funções do Redux
  const dispatch = useDispatch<any>();

  // Permite redirecionar o usuário
  const navigate = useNavigate();

  // Realiza a requisição para o servidor
  const handleOnSubmit = (
    e: FormEvent<HTMLFormElement>,
    data: TDevLoginData
  ) => {
    e.preventDefault();

    // Adiona a função de login
    dispatch(
      login({
        user: { login: data.email, senha: data.password },
        type: "DEVELOPER",
      })
    );
  };

  // Realiza a recuperação de senha
  // const handleRetrievePassword = (email: string, type: string) => {
  //   // Implementar a lógica de recuperação de senha
  // };

  // Responsável por verifica se deu certo
  useEffect(() => {
    if (success) {
      toast.success(success, {
        autoClose: 3000,
      });

      navigate("/dev/home");
    }

    if (error) {
      toast.error(error, {
        autoClose: 3000,
      });
    }
  }, [error, navigate, success]);

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
            loading={loading}
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
