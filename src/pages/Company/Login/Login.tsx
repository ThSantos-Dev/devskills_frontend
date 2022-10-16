// Styles
import styles from "./Login.module.css";

// Hooks
import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Reducer
import { login } from "../../../slices/authSlice";

// SVG
import ilustration from "../../../assets/img/dev-ilustration-login.svg";

// Notificações
import { toast } from "react-toastify";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import ForgotPassword from "../../../components/shared/ForgotPassword/ForgotPassword";
import FormLogin, { TCompanyLoginData } from "./Form/FormLogin";

const Login = () => {
  // State responsável por controlar a validação da Modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // Recebendo os estados do Redux de autenticação
  const {error, success } = useSelector((state: any) => state.auth)

  // Instanciando o Dispatch para poder utilizar as funções do Redux
  const dispatch = useDispatch<any>();

  // Permite redirecionar o usuário
  const navigate = useNavigate()

  // Realiza a requisição para o servidor
  const handleOnSubmit = (
    e: FormEvent<HTMLFormElement>,
    data: TCompanyLoginData
  ) => {
    e.preventDefault();

    // Aciona a função de login
    dispatch(
      login({
        user: { login: data.email, senha: data.password },
        type: "COMPANY",
      })
    );
  };

  // Responsável por verifica se deu certo
  useEffect(() => {
    if (success) {
      toast.success(success, {
        autoClose: 3000,
      });

      navigate("/company/home");
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
            handleOnSubmit={handleOnSubmit}
            openModal={() => setShowModal(!showModal)}
          />
        </div>
      </AuthContainer>

      {showModal && (
        <div className={styles.modal}>
          <ForgotPassword
            closeModal={() => setShowModal(!showModal)}
            type="COMPANY"
          />
        </div>
      )}
    </>
  );
};

export default Login;
