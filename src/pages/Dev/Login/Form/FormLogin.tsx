import React from "react";

// Styles
import styles from "./FormLogin.module.css";

// Components
import Input from "../../../../components/shared/Form/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../../../components/shared/Form/Button/Button";

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
        <div className={styles.checkbox_container}>
          <input type="checkbox" name="" id="" />
          <label>Lembrar-me</label>
        </div>

        <Link to="/">Esqueceu a senha?</Link>
      </div>

      <div className={styles.button_container}>
        <Button size="inherit" text="Entrar" color="solid_white" />
        <p>Ainda não possui conta? <Link to='/dev/register'>Cadastre-se </Link></p>
      </div>
    </form>
  );
};

export default FormLogin;
