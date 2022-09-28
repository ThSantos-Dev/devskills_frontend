// Styles
import styles from "./FormRegister.module.css";

// Hooks
import { useState } from "react";

// Components
import Input from "../../../../components/shared/Form/Input/Input";

// Types
import { useEffect } from "react";
import CNPJService from "../../../../services/apiBrasil/CNPJService";
import { TCompanyRegister } from "../../../../types/devskills/company/TCompanyRegister";
import Button from "./../../../../components/shared/Form/Button/Button";
import { Link } from "react-router-dom";
import Accept from "../../../../components/shared/Accept/Accept";

interface Props {}

const FormRegister = (props: Props) => {
  // State responsável por armazenar os dados do formulario
  const [inputs, setInputs] = useState<TCompanyRegister>({
    cnpj: "",
    fantasy_name: "",
    email: "",
    telephone: "",
    address: {
      district: "",
      number: "",
      public_place: "",
      zip_code: "",
      complement: "",
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
    accept_terms: false,
    accept_email: false,
  });

  // State responsável por manipular a máscara de Telefone
  const [maskTell, setMaskTell] = useState<String>("(00) 0");

  const [loading, setLoading] = useState<boolean>(false);

  // Atualiza o state a cada mundança nas inputs
  const handleOnChange = (value: string | boolean, input: string) => {
    // Atualizando os dados do state
    setInputs((prevState) => ({ ...prevState, [input]: value }));
    console.log(input, value);

    // Alterando a máscara do Telefone
    if (inputs.telephone.charAt(2) !== "9")
      return setMaskTell("(00) 0000-0000");

    return setMaskTell("(00) 00000-0000");
  };

  // Busca as informações da empresa com base no CNPJ
  useEffect(() => {
    if (inputs.cnpj.toString().length === 14) {
      setLoading(true);
      CNPJService.search(inputs.cnpj).then((data) => setLoading(false));
    }
  }, [inputs.cnpj]);

  return (
    <form className={styles.container}>
      <div className={styles.input_container}>
        <Input
          name="cnpj"
          label="CNPJ"
          placeholder="00.000.000/0000-00"
          mask="00.000.000/0000-00"
          value={inputs.cnpj}
          error={false}
          handleOnChange={handleOnChange}
          autoFocus
        />

        <Input
          name="fantasy_name"
          label="Nome Fantasia"
          placeholder="Nome fantasia..."
          value={inputs.fantasy_name}
          error={false}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className={styles.input_container}>
        <Input
          name="email"
          label="E-mail"
          placeholder="email@email.org.com"
          type="email"
          value={inputs.email}
          error={false}
          handleOnChange={handleOnChange}
        />
        <Input
          name="telephone"
          label="Telefone"
          placeholder="(00) 90000-0000"
          mask={maskTell}
          handleOnChange={handleOnChange}
          value={inputs.telephone}
          error={false}
        />
      </div>
      <div className={styles.input_container}>
        <div className={styles.input_container}>
          <Input
            name="addressZipCode"
            label="CEP"
            placeholder="00000-000"
            mask="00000-000"
            disabled
            value={inputs.address.zip_code}
            error={false}
          />
          <Input
            name="addressNumber"
            label="Número"
            placeholder="00A"
            value={inputs.address.number}
            error={false}
            handleOnChange={handleOnChange}
            autoFocus
          />
        </div>

        <Input
          name="complement"
          label="Complemento"
          placeholder="Bloco C22"
          value={inputs.fantasy_name}
          error={false}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className={styles.input_container}>
        <Input
          name="address"
          label="Endereço"
          placeholder="Alameda Java Green"
          value={inputs.cnpj}
          error={false}
          disabled
          autoFocus
        />
      </div>
      <div className={styles.input_container}>
        <Input
          name="password"
          label="Defina uma senha"
          placeholder="Defina a senha"
          value={inputs.password}
          type="password"
          error={false}
          handleOnChange={handleOnChange}
        />

        <Input
          name="confirmPassword"
          label="Confirme a Senha"
          placeholder="Confirme sua senha"
          value={inputs.confirmPassword}
          type="password"
          errorMessage="As senhas não são iguais."
          error={false}
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
        <Button
          color="solid_white"
          size="medium"
          text="Continuar"
          disabled={!inputs.accept_terms}
        />
        <p>
          Já possui conta? <Link to="/company/login">Entrar</Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
