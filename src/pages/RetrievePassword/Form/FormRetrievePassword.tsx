// Styles
import styles from "./FormRetrievePassword.module.css";

// React
import { FormEvent, useState } from "react";
import Input from "../../../components/shared/Form/Input/Input";
import Button from "../../../components/shared/Form/Button/Button";

// Components

// Props
interface Props {
  handleOnSubmit(data: any): void;
}

const FormLogin: React.FC<Props> = ({ handleOnSubmit }) => {
  // State para controlar as inputs
  const [inputs, setInputs] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: { error: false, messsage: "" },
    confirmPassword: { error: false, messsage: "" },
  });

  // Atualiza os dados do State
  const handleOnChange = (value: string, input: string) => {
    setInputs({ ...inputs, [input]: value });
  };

  // Validando as senhas
  const handleValidate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputs.password.trim() || inputs.password.trim().length < 8)
      return setErrors({
        ...errors,
        password: {
          error: true,
          messsage:
            "A senha deve conter no mínimo 8 caracteres, tendo no mínimo: 1 letra MAIÚSCULA, 1 letra minúscula e 1 caractere especial. ",
        },
      });

    if (
      !inputs.confirmPassword.trim() ||
      inputs.confirmPassword !== inputs.password
    )
      return setErrors({
        ...errors,
        confirmPassword: {
          error: true,
          messsage: "As senhas devem ser iguais!",
        },
      });

      handleOnSubmit({...inputs})
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleValidate(e)}
    >
      <div className={styles.input_container}>
        <Input
          name="password"
          label="Nova senha"
          type="password"
          placeholder="Nova senha"
          error={errors.password.error}
          handleOnChange={handleOnChange}
          errorMessage={errors.password.messsage}
          onFocus={() =>
            setErrors({ ...errors, password: { error: false, messsage: "" } })
          }
        />

        <Input
          name="confirmPassword"
          label="Confirme sua senha"
          type="password"
          placeholder="Digite novamente"
          handleOnChange={handleOnChange}
          error={errors.confirmPassword.error}
          errorMessage={errors.confirmPassword.messsage}
          onFocus={() =>
            setErrors({
              ...errors,
              confirmPassword: { error: false, messsage: "" },
            })
          }
        />
      </div>

      <div className={styles.button_container}>
        <Button size="inherit" text="Redefinir" color="solid_white" />
      </div>
    </form>
  );
};

export default FormLogin;
