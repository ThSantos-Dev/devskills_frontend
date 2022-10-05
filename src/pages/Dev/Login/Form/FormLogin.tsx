// Styles
import styles from "./FormLogin.module.css";

// React
import { FormEvent, useState } from "react";

// Components
import { Link } from "react-router-dom";
import Accept from "../../../../components/shared/Accept/Accept";
import Button from "../../../../components/shared/Form/Button/Button";
import Input from "../../../../components/shared/Form/Input/Input";

// Props
interface Props {
  openModal():void;
  handleOnSubmit(e: FormEvent<HTMLFormElement>, data: any): void;
}

const FormLogin: React.FC<Props> = ({ handleOnSubmit, openModal }) => {
  // State para controlar as inputs
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  // Atualiza os dados do State
  const handleOnChange = (value: string, input: string) => {
    setInputs({ ...inputs, [input]: value });
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleOnSubmit(e, inputs)}
    >
      <div className={styles.input_container}>
        <Input
          name="email"
          label="Usuário"
          type="email"
          placeholder="E-mail"
          handleOnChange={handleOnChange}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Senha"
          handleOnChange={handleOnChange}
        />
      </div>

      <div className={styles.options}>
        <Accept
          name="remember" 
          handleOnClick={(checked, name) => console.log("teste")}
        >
          <p>Lembrar-me</p>
        </Accept>

        <span onClick={openModal} className={styles.forgot_password}>Esqueceu a senha?</span>
      </div>

      <div className={styles.button_container}>
        <Button size="inherit" text="Entrar" color="solid_white" />
        <p>
          Ainda não possui conta? <Link to="/register">Cadastre-se </Link>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
