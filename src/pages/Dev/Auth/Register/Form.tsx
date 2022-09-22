// Styles
import styles from "./Form.module.css";

// Hooks
import { useState, FormEvent } from "react";

// Component
import Input from "../../../../components/shared/Input/Input";
import SelectCustom from "./../../../../components/shared/Select/SelectCustom";
import Accept from "../../../../components/shared/Accept/Accept";

// Utils
import regex from "../../../../utils/my-regex";
import { Link } from "react-router-dom";
import Button from "../../../../components/shared/Button/Button";

interface Props {}

type TUserRegister = {
  name: string;
  birth_date: string;
  cpf: string;
  genre: string;
  email: string;
  seniority: string;
  password: string;
  confirmPassword: string;
};

const Form = (props: Props) => {
  const [inputs, setInputs] = useState<TUserRegister>({
    name: "",
    birth_date: "",
    cpf: "",
    genre: "",
    email: "",
    seniority: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (value: string, input: string) => {
    console.log(input, value);

    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.input_container}>
        <Input
          name="name"
          label="Nome Completo"
          placeholder="Digite seu nome..."
          value={inputs.name}
          mask={regex.onlyLetters}
          handleOnChange={handleOnChange}
          autoFocus
        />

        <Input
          name="birth_date"
          label="Data de Nascimento"
          type="date"
          value={inputs.birth_date}
          handleOnChange={handleOnChange}
        />
      </div>

      <div className={styles.input_container}>
        <Input
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          value={inputs.cpf}
          mask={"000.000.000-00"}
          handleOnChange={handleOnChange}
        />

        <SelectCustom placeholder="escolha" label="Gênero" />
      </div>

      <div className={styles.input_container}>
        <Input
          name="email"
          label="E-mail"
          placeholder="email@email.com"
          value={inputs.email}
          type="email"
          handleOnChange={handleOnChange}
        />

        <SelectCustom placeholder="escolha" label="Senioridade" />
      </div>

      <div className={styles.input_container}>
        <Input
          name="password"
          label="Defina uma senha"
          placeholder="Defina a senha"
          value={inputs.password}
          type="password"
          handleOnChange={handleOnChange}
        />

        <Input
          name="confirmPassword"
          label="Confirme a Senha"
          placeholder="Confirme sua senha"
          value={inputs.confirmPassword}
          type="password"
          handleOnChange={handleOnChange}
        />
      </div>

      <Accept name="email" handleOnClick={(name) => console.log(name)}>
        <p>Sim, eu aceito receber e-mails da DevSkills.</p>
      </Accept>

      <Accept name="termos" handleOnClick={(name) => console.log(name)}>
        <p>
          Sim, eu concordo com todos os <Link to="/">Termos</Link> e{" "}
          <Link to="/">Política Privacidade</Link>.
        </p>
      </Accept>

      <div className={styles.button_container}>
        <Button color="solid_white" size="medium" text="Continuar" />
        <p>Já possui conta? <Link to="/">Entrar</Link></p>
      </div>
    </form>
  );
};

export default Form;
