// Styles
import styles from "./FormRegister.module.css";

// Hooks
import { FormEvent, useState, useEffect } from "react";

// Component
import { Link } from "react-router-dom";
import Accept from "../../../../components/shared/Accept/Accept";
import Input from "../../../../components/shared/Form/Input/Input";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";
import Button from "../../../../components/shared/Form/Button/Button";

// Utils
import regex from "../../../../utils/my-regex";

// Types
import { TDevRegister } from "../../../../types/dev/TDevRegister";
import GenreService from "../../../../services/GenreService";

interface Props {
  handleOnSubmit(e: FormEvent<HTMLFormElement>, data: TDevRegister): void;
}

const FormRegister: React.FC<Props> = ({ handleOnSubmit }) => {


  const [inputs, setInputs] = useState<TDevRegister>({
    name: "",
    birth_date: "",
    cpf: "",
    genre: "",
    email: "",
    seniority: "",
    password: "",
    confirmPassword: "",
  });

  // Atualiza o state
  const handleOnChange = (value: string | boolean, input: string) => {
    console.log(input, value);

    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  // Carregando os dados dos selects
  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL);
    GenreService.getAll().then(data => console.log(data))
  }, [])

  

  return (
    <form
      className={styles.container}
      onSubmit={(e: FormEvent<HTMLFormElement>) =>
        handleOnSubmit(e, { ...inputs })
      }
    >
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

        {/* <SelectCustom
          handleOnChange={handleOnChange}
          name="genre"
          placeholder="Gênero"
          label="Gênero"
          noOptionsMessage="Não há gêneros disponíveis."
        /> */}
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

        {/* <SelectCustom
          handleOnChange={handleOnChange}
          name="seniority"
          placeholder="Senioridade"
          label="Senioridade"
          noOptionsMessage="Não há mais opções disponíveis."
        /> */}
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

      <div className={styles.accept}>
        <Accept
          name="accept_email"
          handleOnClick={(value: boolean, name: string) =>
            handleOnChange(value, name)
          }
        >
          <p>Sim, eu aceito receber e-mails da DevSkills.</p>
        </Accept>

        <Accept
          name="accept_terms"
          handleOnClick={(value: boolean, name: string) =>
            handleOnChange(value, name)
          }
        >
          <p>
            Sim, eu concordo com todos os <Link to="/">Termos</Link> e{" "}
            <Link to="/">Política Privacidade</Link>.
          </p>
        </Accept>
      </div>

      <div className={styles.button_container}>
        <Button color="solid_white" size="medium" text="Continuar" />
        <p>
          Já possui conta? <Link to="/">Entrar</Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
