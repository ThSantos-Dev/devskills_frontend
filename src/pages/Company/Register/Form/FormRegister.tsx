// Styles
import styles from "./FormRegister.module.css";

// Hooks
import { FormEvent, useEffect, useState } from "react";

// Services
import CEPService from "../../../../services/apiBrasil/CEPService";
import CNPJService from "../../../../services/apiBrasil/CNPJService";

// Components
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Accept from "../../../../components/shared/Accept/Accept";
import Input from "../../../../components/shared/Form/Input/Input";
import Button from "./../../../../components/shared/Form/Button/Button";

// Types
import { TCompanyRegister } from "../../../../types/devskills/company/TCompanyRegister";

interface Props {
  handleSubmit(data: TCompanyRegister): void;
}

const FormRegister: React.FC<Props> = ({ handleSubmit }) => {
  // State responsável por armazenar os dados do formulario
  const [inputs, setInputs] = useState({
    cnpj: "",
    fantasy_name: "",
    email: "",
    telephone: "",
    complement: "",
    address: {
      district: "",
      number: "",
      public_place: "",
      zip_code: "",
      state: {
        name: "",
        federative_unit: "",
      },
      city: {
        name: "",
      },
    },
    password: "",
    confirmPassword: "",
    active: false,
    accept_terms: false,
    accept_email: false,
  });

  // State responsável por manipular a máscara de Telefone
  const [maskTell, setMaskTell] = useState<String>("(00) 0");

  // State para manipular os erros
  const [errors, setErrors] = useState({
    // cnpj, email, senha, nome_fantasia, telefone
    cnpj: false,
    email: false,
    password: false,
    confirmPassword: false,
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

  // Validação dos dados
  const handleValidate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputs.cnpj);

    // Validando os dados
    if (!inputs.cnpj || inputs.cnpj.trim().length !== 14 || !inputs.active) {
      toast.error("O CNPJ informado é inválido!");
      setErrors({ ...errors, cnpj: true });
      return;
    }

    if (!inputs.email || inputs.email.trim().length < 11)
      return setErrors({ ...errors, email: true });

    if (!inputs.password) return setErrors({ ...errors, password: true });

    if (inputs.password !== inputs.confirmPassword)
      return setErrors({ ...errors, confirmPassword: true });

    // Zerando os erros
    setErrors({
      cnpj: false,
      email: false,
      password: false,
      confirmPassword: false,
    });

    return handleSubmit({ ...inputs });
  };

  // Busca as informações da empresa com base no CNPJ
  useEffect(() => {
    if (inputs.cnpj.length === 14) {
      // Buscando informações da empresa com base no CNPJ
      CNPJService.search(inputs.cnpj).then((data) => {
        if (typeof data === "boolean") {
          // Resetando os campos que são de preenchimento da API
          setInputs((prevState) => ({
            cnpj: prevState.cnpj,
            fantasy_name: "",
            email: prevState.email,
            telephone: "",
            complement: "",
            address: {
              district: "",
              number: "",
              public_place: "",
              zip_code: "",
              state: {
                name: "",
                federative_unit: "",
              },
              city: {
                name: "",
              },
            },
            password: prevState.password,
            confirmPassword: prevState.confirmPassword,
            active: false,
            accept_terms: prevState.accept_terms,
            accept_email: prevState.accept_email,
          }));

          // Acusando erro no CNPJ
          setErrors((prevState) => ({ ...prevState, cnpj: true }));
          return toast.error("O CNPJ informado é inválido!");
        }

        // Adicionando os dados na State
        setInputs((prevState) => {
          return {
            ...prevState,
            cnpj: data.cnpj,
            fantasy_name: data.nome_fantasia
              ? data.nome_fantasia.toUpperCase()
              : data.razao_social.toLocaleUpperCase(),
            telephone: data.ddd_telefone_1,
            active: data.descricao_situacao_cadastral.toLowerCase() === "ativa",
            complement: data.complemento,
            address: {
              district: "",
              number: data.numero,
              public_place: "",
              zip_code: data.cep,
              state: {
                name: "",
                federative_unit: "",
              },
              city: {
                name: "",
              },
            },
          };
        });

        return;
      });
    }

    return setErrors((prevState) => ({ ...prevState, cnpj: false }));
  }, [inputs.cnpj]);

  // Busca as informações de endereço com base no CEP
  useEffect(() => {
    if (inputs.address.zip_code.length === 8) {
      CEPService.search(inputs.address.zip_code).then((data) => {
        if (typeof data === "boolean") return;

        setInputs((prevState) => {
          return {
            ...prevState,
            address: {
              district: data.neighborhood,
              number: prevState.address.number,
              public_place: data.street,
              zip_code: data.cep,
              complement: prevState.complement,
              state: {
                name: "",
                federative_unit: data.state,
              },
              city: {
                name: data.city,
              },
            },
          };
        });
      });
    }
  }, [inputs.address.zip_code]);

  return (
    <form className={styles.container} onSubmit={handleValidate}>
      <div className={styles.input_container}>
        <Input
          name="cnpj"
          label="CNPJ"
          placeholder="00.000.000/0000-00"
          mask="00.000.000/0000-00"
          value={inputs.cnpj}
          error={errors.cnpj}
          handleOnChange={handleOnChange}
          onFocus={() => setErrors({ ...errors, confirmPassword: false })}
          autoFocus
        />

        <Input
          name="fantasy_name"
          label="Nome Fantasia"
          placeholder="Nome fantasia..."
          value={inputs.fantasy_name}
        />
      </div>
      <div className={styles.input_container}>
        <Input
          name="email"
          label="E-mail"
          placeholder="email@email.org.com"
          type="email"
          value={inputs.email}
          error={errors.email}
          minLength={10}
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
        />
      </div>
      <div className={styles.input_container}>
        <div className={`${styles.input_container} ${styles.no_wrap}`}>
          <Input
            name="addressZipCode"
            label="CEP"
            placeholder="00000-000"
            mask="00000-000"
            disabled
            value={inputs.address.zip_code}
          />
          <Input
            name="addressNumber"
            label="Número"
            placeholder="00A"
            value={inputs.address.number}
            disabled
          />
        </div>

        <Input
          name="complement"
          label="Complemento"
          placeholder="Bloco C22"
          value={inputs.complement}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className={styles.input_container}>
        <Input
          name="address"
          label="Endereço"
          placeholder="Alameda Java Green"
          value={
            inputs.address.public_place &&
            `${inputs.address.public_place}, ${inputs.address.number} - ${inputs.address.district}, ${inputs.address.city.name} - ${inputs.address.state.federative_unit}`
          }
          disabled
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
          disabled={!inputs.accept_terms || !inputs.active}
        />
        <p>
          Já possui conta? <Link to="/company/login">Entrar</Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
