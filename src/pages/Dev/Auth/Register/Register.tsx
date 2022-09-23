// Styles
import styles from "./Register.module.css";

// SVG
import ilustration from "../../../../assets/img/dev-ilustration.svg";
import logo from "../../../../assets/img/logo.svg";

// Hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

// Components
import AuthHeader from "../../../../components/shared/Auth/AuthHeader";
import Form from "./Form";

// Regex

const Register = () => {
  // Resgatando valor do Parâmetro passado pela URL
  const { user } = useParams();

  // State
  const [input, setInputs] = useState({
    password: "",
    idade: "",
    name: "",
    cpf: "",
    telefone: "",
  });

  const handleOnChange = (value: string, label: any) => {
    console.log(label, value);
    setInputs((prevState) => ({ ...prevState, [label]: value }));
  };

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

        <Form />
      </div>
    </div>
  );
};

export default Register;
