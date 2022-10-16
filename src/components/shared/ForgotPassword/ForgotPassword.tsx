// Hooks
import { useState } from "react";

// Styles
import styles from "./ForgotPassword.module.css";

// Components
import Button from "../Form/Button/Button";
import Input from "../Form/Input/Input";

// Icons
import { FormEvent, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { sendEmail } from "../../../slices/common/forgotPasswordSlice";

interface Props {
  type: "DEVELOPER" | "COMPANY" | "ADMIN";
  closeModal(): void;
}

const ForgotPassword: React.FC<Props> = ({ type, closeModal }) => {
  // State responsável por armazenar o e-mail digitado
  const [email, setEmail] = useState<string>("");

  // Resgatando os dados do Redux
  const { message, error, loading } = useSelector(
    (state: any) => state.forgotPassword
  );

  // Instanciando o dispatch para ter acesso as funções do Redux
  const dispatch = useDispatch<any>();

  // Enviando a solicitação para o back-end
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(sendEmail({ login: email, type }));
  };

  const [id, setId] = useState<any>();

  useEffect(() => {
    if (loading && !id) setId(toast.loading("Processando..."));

    if (message) {
      toast.update(id, {
        render: message,
        autoClose: 3000,
        type: "success",
        isLoading: false,
      });
      setId(null);

      return;
    }

    if (error) {
      toast.update(id, {
        render: error,
        autoClose: 3000,
        type: "error",
        isLoading: false,
      });

      setId(null);

      return;
    }
  }, [error, id, loading, message]);

  return (
    <div className={styles.container}>
      <form className={styles.content} onSubmit={handleOnSubmit}>
        <div className={styles.close} onClick={closeModal}>
          <IoClose title="Fechar" />
        </div>

        <div className={styles.header}>
          <h1>Esqueci minha senha</h1>
          <p>
            Por gentiliza, informe o e-mail da conta cadastrada, enviaremos um
            link que o possibilitará a recuperação da sua senha.
          </p>
        </div>

        <div className={styles.input_container}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="example@email.com"
            required
            handleOnChange={(value) => setEmail(value)}
          />
        </div>

        <div className={styles.button_container}>
          <Button
            color="solid_white"
            size="medium"
            text="Enviar"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
