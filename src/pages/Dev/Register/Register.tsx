// Redux
import { register, reset } from "../../../slices/dev/devSlice";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// SVG
import ilustration from "../../../assets/img/dev-ilustration.svg";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister, { TDevRegisterStepOne } from "./Form/FormRegister";
import Skills, { TSkillsData } from "./Skills/Skills";

// Types
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TDevRegister } from "../../../types/devskills/dev/TDevRegister";

const Register = () => {
  // State para controlar as etapas
  const [step, setStep] = useState({
    one: true,
    two: false,
  });

  // State que controla as notificações
  const [idToast, setIdToast] = useState<any>();

  // State que armazena os dados do usuário
  const [devData, setDevData] = useState<TDevRegister>();

  // Instanciando o Dispatch para ter acesso as funções do Redux
  const dispatch = useDispatch<any>();

  const navigate = useNavigate();

  // Resgatando os estados do Redux
  const { loading } = useSelector((state: any) => state.auth);
  const {
    success,
    error,
    loading: devLoading,
  } = useSelector((state: any) => state.dev);

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
      permissao_email: data.accept_email
    };

    // Adicionando os dados ao state
    setDevData(dataFormated);

    setStep({ one: false, two: true });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>, data: TSkillsData) => {
    e.preventDefault();

    // Encaminhando os dados para o Redux realizar a requisição
    dispatch(
      register({
        ...devData,
        ids_stacks: data.stacks,
        ids_habilidades: data.skills,
      })
    );
  };

  useEffect(() => {
    // Limapando os dados do Dev a cada renderização do Login
    reset();
  }, []);

  useEffect(() => {
    if (devLoading && !idToast) setIdToast(toast.loading("Processando..."));

    if (success) {
      toast.update(idToast, {
        render: "Usuário cadastrado com sucesso! Efetue o login.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      // toast.success("Usuário cadastrado com sucesso! Efetue o login.");
      navigate("/dev/login");
    }

    if (error) {
      toast.update(idToast, {
        render: "Vamos ver se é esse aqui",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      setStep({ one: true, two: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  if (loading) return <p>Carregando...</p>;

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
