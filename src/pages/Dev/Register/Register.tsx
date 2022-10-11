// Redux
import { register, reset } from "../../../slices/devSlice";

// Hooks
import { useSelector, useDispatch } from "react-redux";

// SVG
import ilustration from "../../../assets/img/dev-ilustration.svg";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister, { TDevRegisterStepOne } from "./Form/FormRegister";
import Skills, { TSkillsData } from "./Skills/Skills";

// Types
import { TDevRegister } from "../../../types/devskills/dev/TDevRegister";
import { FormEvent, useEffect, useState } from "react";

const Register = () => {
  // State para controlar as etapas
  const [step, setStep] = useState({
    one: true,
    two: false,
  });

  // State que armazena os dados do usuário
  const [devData, setDevData] = useState<TDevRegister>();

  // Instanciando o Dispatch para ter acesso as funções do Redux
  const dispatch = useDispatch<any>();

  // Resgatando os estados do Redux
  const { loading, error } = useSelector((state: any) => state.auth);

  // Resgata os dados do primeiro formulario
  const handleDataStepOne = (data: TDevRegisterStepOne) => {
    // Adequando os dados ao tipo
    const dataFormated: TDevRegister = {
      nome: data.name,
      email: data.email,
      senha: data.password,
      confirmar_senha: data.confirmPassword,
      cpf: data.cpf,
      data_nascimento: data.birth_date,
      ddd: data.telephone.slice(0, 2),
      numero: data.telephone.slice(2),
      id_genero: parseInt(data.gender),
      id_tipo_telefone: data.telephone.slice(2).length === 9 ? 1 : 2,
    };

    // Adicionando os dados ao state
    setDevData(dataFormated);

    setStep({ one: false, two: true });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>, data: TSkillsData) => {
    e.preventDefault();

    if (data.stacks.length > 0 || data.skills.length > 0)
      setDevData({
        ...devData!,
        ids_stacks: data.stacks,
        ids_habilidades: data.skills,
      });

    // Encaminhando os dados para o Redux realizar a requisição
    dispatch(register(devData));
  };

  useEffect(() => {
    // Limapando os dados do Dev a cada renderização do Login
    dispatch(reset());
  }, [dispatch]);

  return (
    <AuthContainer ilustration={{ src: ilustration, alt: "ilustração" }}>
      {step.one ? (
        <>
          <AuthHeader
            title="Olá, Recruta!"
            subtitle="Experimente novos desafios"
          >
            <p>
              Ao se cadastrar como <b>desenvolvedor</b> você terá acesso a
              desafios reais do mercado de trabalho que serão de grande
              aprendizado.
            </p>
          </AuthHeader>

          <FormRegister handleOnSubmit={handleDataStepOne} />
        </>
      ) : (
        <>
          <AuthHeader title="Só mais um pouco..." subtitle="Qualificações">
            <p>
              Selecione a(s) tecnologias(s) que você domina ou que tenha
              interesse. Sinta-se livre, você pode editá-las depois.
            </p>
          </AuthHeader>

          <Skills handleOnSubmit={handleOnSubmit} />
        </>
      )}
    </AuthContainer>
  );
};

export default Register;
