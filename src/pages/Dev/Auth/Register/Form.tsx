// Styles
import styles from "./Form.module.css";

// Hooks
import { useState } from "react";

// Component
import Input from "../../../../components/shared/Input/Input";

// Utils
import { FormEvent } from "react";
import regex from "../../../../utils/my-regex";
import SelectCustom from "./../../../../components/shared/Select/SelectCustom";

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

      <Input
        name="cpf"
        label="CPF"
        placeholder="000.000.000-00"
        value={inputs.cpf}
        mask={"000.000.000-00"}
        handleOnChange={handleOnChange}
      />

      <SelectCustom placeholder="escolha" label="Gênero" />

      <Input
        name="email"
        label="E-mail"
        placeholder="email@email.com"
        value={inputs.email}
        type="email"
        handleOnChange={handleOnChange}
      />

      <SelectCustom placeholder="escolha" label="Senioridade" />

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
    </form>
  );
};

export default Form;
