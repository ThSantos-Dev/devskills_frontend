// Styles
import styles from "./Register.module.css";

// SVG
import ilustration from "../../../assets/img/dev-ilustration.svg";
import logo from "../../../assets/img/logo.svg";

// Hooks
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister from "./Form/FormRegister";
import { TDevRegister } from "../../../types/dev/TDevRegister";

// Regex

const Register = () => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>, data: TDevRegister) => {
    e.preventDefault()

    console.log(data)
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={logo} alt="<DevSkills />" className={styles.logo} />
        <img
          src={ilustration}
          alt="ilustração"
          className={styles.ilustration}
        />
      </div>

      <div className={styles.content}>
        <img src={logo} alt="<DevSkills />" className={styles.logo_small} />

        <AuthHeader title="Olá, Recruta!" subtitle="Experimente novos desafios">
          <p>
            Ao se cadastrar como <b>desenvolvedor</b> você terá acesso a
            desafios reais do mercado de trabalho que serão de grande
            aprendizado.
          </p>
        </AuthHeader>

        <FormRegister handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
};

export default Register;
