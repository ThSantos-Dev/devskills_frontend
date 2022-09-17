import React, { useState } from "react";

// Hooks
import { useParams } from "react-router-dom";

// Components
import Input from "./../../../components/shared/Input/Input";

// Regex
import regex from "../../../utils/my-regex";

const Register = () => {
  // Resgatando valor do Parâmetro passado pela URL
  const { user } = useParams();

  // State
  const [input, setInputs] = useState({
    password: "",
    idade: 0,
    name: "",
  });

  const handleOnChange = (value: string, label: any) => {
    setInputs((prevState) => ({ ...prevState, [label]: value }));
  };

  return (
    <div>
      <h1>Dados</h1>
      Register - {user}
      <br />
      <br />
      <br />
      <Input
        handleOnChange={handleOnChange}
        value={input.name}
        label="nome completo"
        name="name"
        placeholder="teste"
        mask={regex.onlyLetters}
      />
      <Input
        label="data de nascimento"
        type={"date"}
        name="data_nasc"
        value={input.idade}
        handleOnChange={handleOnChange}
      />
      <Input
        label="Digite sua senha"
        name="password"
        type={"password"}
        placeholder={"teste"}
        value={input.password}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default Register;
