// Styles
import styles from "./FormRegister.module.css";

// Hooks
import { FormEvent, useEffect, useState } from "react";

// Component
import { Link } from "react-router-dom";
import Accept from "../../../../components/shared/Accept/Accept";
import Button from "../../../../components/shared/Form/Button/Button";
import Input from "../../../../components/shared/Form/Input/Input";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";

// Utils
import regex from "../../../../utils/my-regex";

// Types
import { SingleValue } from "react-select";
import { TDevRegister } from "../../../../types/devskills/dev/TDevRegister";
import { TGenre } from "../../../../types/devskills/genre/TGenre";

// Service
import GenreService from "../../../../services/apiDevSkills/GenreService";

interface Props {
  handleOnSubmit(data: TDevRegister): void;
}

const FormRegister: React.FC<Props> = ({ handleOnSubmit }) => {
  // State responsável por armazenar os dados de select de Gênero
  const [genres, setGenres] = useState<
    SingleValue<{ label: string; value: string }>[]
  >([]);

  // State responsável por manipular a máscara de Telefone
  const [maskTell, setMaskTell] = useState<String>("(00) 0");

  // State resposável por armazenar erros
  const [errors, setErrors] = useState({
    name: false,
    birth_date: false,
    cpf: false,
    genre: false,
    email: false,
    telephone: false,
    password: false,
    confirmPassword: false,
  });

  // State responsável por armazenar os dados do formulario
  const [inputs, setInputs] = useState<TDevRegister>({
    name: "",
    birth_date: "",
    cpf: "",
    genre: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    accept_terms: false,
    accept_email: false,
  });

  // Atualiza o state a cada mundança nas inputs
  const handleOnChange = (value: string | boolean, input: string) => {
    // Atualizando os dados do state
    setInputs((prevState) => ({ ...prevState, [input]: value }));

    // Alterando a máscara do Telefone
    if (inputs.telephone.charAt(2) !== "9")
      return setMaskTell("(00) 0000-0000");

    return setMaskTell("(00) 00000-0000");
  };

  // Efetua as validações do formulário
  const handleValidate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validando os campos obrigatórios
    if (!inputs.name.trim() || inputs.name.trim().length < 5)
      return setErrors({ ...errors, name: true });

    if (!inputs.birth_date || inputs.birth_date.trim().length < 7)
      return setErrors({ ...errors, birth_date: true });

    if (!inputs.cpf.trim() || inputs.cpf.trim().length !== 11)
      return setErrors({ ...errors, cpf: true });

    if (!inputs.genre) return setErrors({ ...errors, genre: true });

    if (!inputs.email.trim() || inputs.email.trim().length < 10)
      return setErrors({ ...errors, email: true });

    if (!inputs.password) return setErrors({ ...errors, password: true });

    if (inputs.password !== inputs.confirmPassword)
      return setErrors({ ...errors, confirmPassword: true });

    // Resetando os erros
    setErrors({
      name: false,
      birth_date: false,
      cpf: false,
      genre: false,
      email: false,
      telephone: false,
      password: false,
      confirmPassword: false,
    });

    return handleOnSubmit({ ...inputs });
  };

  // Carregando os dados dos selects
  useEffect(() => {
    // Variáveis auxiliares
    let genresOption: SingleValue<{ label: string; value: string }>[] = [];

    // Buscando os Gêneros
    GenreService.getAll().then((data) => {
      if (typeof data == "boolean") return;

      data.map((genre: TGenre) => {
        return genresOption.push({ value: `${genre.id}`, label: genre.name });
      });

      setGenres(genresOption);
    });
  }, []);

  return (
    <form className={styles.container} onSubmit={handleValidate}>
      <div className={styles.input_container}>
        <Input
          name="name"
          label="Nome Completo"
          placeholder="Digite seu nome..."
          value={inputs.name}
          mask={regex.onlyLetters}
          error={errors.name}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, name: false })}
          autoFocus
        />

        <Input
          name="birth_date"
          label="Data de Nascimento"
          type="date"
          value={inputs.birth_date}
          min={`${new Date().getFullYear() - 90}-01-01`}
          max={`${new Date().getFullYear() - 14}-12-31`}
          error={errors.birth_date}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, birth_date: false })}
        />
      </div>

      <div className={styles.input_container}>
        <Input
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          value={inputs.cpf}
          mask={"000.000.000-00"}
          error={errors.cpf}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, cpf: false })}
        />

        <SelectCustom
          name="genre"
          label="Gênero"
          placeholder="Gênero"
          handleOnChange={handleOnChange}
          error={errors.genre}
          noOptionsMessage="Não há gêneros disponíveis."
          options={genres && genres}
          handleOnFocus={() => setErrors({ ...errors, genre: false })}
        />
      </div>

      <div className={styles.input_container}>
        <Input
          name="email"
          label="E-mail"
          placeholder="email@email.com"
          value={inputs.email}
          type="email"
          error={errors.email}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, email: false })}
        />

        <Input
          name="telephone"
          label="Telefone"
          placeholder="(00) 90000-0000"
          mask={maskTell}
          handleOnChange={handleOnChange}
          value={inputs.telephone}
          error={errors.telephone}
        />
      </div>

      <div className={styles.input_container}>
        <Input
          name="password"
          label="Defina uma senha"
          placeholder="Defina a senha"
          value={inputs.password}
          type="password"
          error={errors.password}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, password: false })}
        />

        <Input
          name="confirmPassword"
          label="Confirme a Senha"
          placeholder="Confirme sua senha"
          value={inputs.confirmPassword}
          type="password"
          errorMessage="As senhas não são iguais."
          error={errors.confirmPassword}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, confirmPassword: false })}
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
        <Button
          color="solid_white"
          size="medium"
          text="Continuar"
          disabled={!inputs.accept_terms}
        />
        <p>
          Já possui conta? <Link to="/dev/login">Entrar</Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
