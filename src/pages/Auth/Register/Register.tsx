import { useState } from "react";

// Hooks
import { useParams } from "react-router-dom";

// Components
import Input from "./../../../components/shared/Input/Input";

// Regex
import SelectCustom from "../../../components/shared/Select/SelectCustom";
import regex from "../../../utils/my-regex";

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
        placeholder="Digite seu nome..."
        mask={regex.onlyLetters}
      />
      {/* <Input
        label="data de nascimento"
        type={"date"}
        name="idade"
        value={input.idade}
        handleOnChange={handleOnChange}
      />
      <Input
        label="Digite sua senha"
        name="password"
        type={"password"}
        // placeholder={"teste"}
        placeholder={"teste"}
        value={input.password}
        handleOnChange={handleOnChange}
      />
      <Input
        label="CPF"
        name="cpf"
        value={input.cpf}
        handleOnChange={handleOnChange}
        placeholder={"000.000.000-00"}
        mask={"000.000.000-00"}
      />
      <Input
        label="Telefone"
        name="telefone"
        value={input.telefone}
        mask="(00) 00000-0000"
        placeholder="(00) 00000-0000"
        handleOnChange={handleOnChange}
      /> */}
      <SelectCustom />
    </div>
  );
};

export default Register;
