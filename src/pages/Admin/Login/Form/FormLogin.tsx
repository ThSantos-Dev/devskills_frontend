// Styles
import styles from "./FormLogin.module.css";

// Components
import { Link } from "react-router-dom";
import Accept from "../../../../components/shared/Accept/Accept";
import Button from "../../../../components/shared/Form/Button/Button";
import Input from "../../../../components/shared/Form/Input/Input";

const FormLogin = () => {
  return (
    <form className={styles.container}>
      <div className={styles.input_container}>
        <Input name="email" label="Usuário" type="email" placeholder="E-mail" />

        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Senha"
        />
      </div>

      <div className={styles.options}>
        <Accept
          name="remember"
          handleOnClick={(checked, name) => console.log("teste")}
        >
          <p>Lembrar-me</p>
        </Accept>

        <Link to="/">Esqueceu a senha?</Link>
      </div>

      <div className={styles.button_container}>
        <Button size="inherit" text="Entrar" color="solid_white" />
      </div>
    </form>
  );
};

export default FormLogin;
