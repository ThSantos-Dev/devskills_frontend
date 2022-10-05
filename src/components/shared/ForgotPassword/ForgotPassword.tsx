// React
import React from "react";

// Styles
import styles from "./ForgotPassword.module.css";

// Components
import Button from "../Form/Button/Button";
import Input from "../Form/Input/Input";

// Icons
import { IoClose } from "react-icons/io5";

interface Props {
  type: "DEV" | "COMPANY" | "ADMIN",
  closeModal(): void
}

const ForgotPassword: React.FC<Props> = ({ type, closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
          />
        </div>

        <div className={styles.button_container}>
          <Button color="solid_white" size="medium" text="Enviar" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
