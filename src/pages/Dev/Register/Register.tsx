// Redux
import { register, reset } from "../../../slices/devSlice";

// Hooks
import { useSelector, useDispatch } from "react-redux";

// SVG
import ilustration from "../../../assets/img/dev-ilustration.svg";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister from "./Form/FormRegister";
import Skills from "./Skills/Skills";

// Types
import { TDevRegister } from "../../../types/devskills/dev/TDevRegister";
import { useEffect, useState } from "react";

const Register = () => {
  // State para controlar as etapas
  const [step, setStep] = useState({
    one: false,
    two: true,
  });

  // Instanciando o Dispatch para ter acesso as funções do Redux
  const dispatch = useDispatch<any>();

  // Resgatando os estados do Redux
  const { loading, error } = useSelector((state: any) => state.dev);

  const handleOnSubmit = (data: TDevRegister) => {
    console.log(data);

    // Encaminhando os dados para o Redux realizar a requisição
    dispatch(register(data));
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

          <FormRegister handleOnSubmit={handleOnSubmit} />
        </>
      ) : (
        <>
          <AuthHeader title="Só mais um pouco..." subtitle="Qualificações">
            <p>
              Selecione a(s) tecnologias(s) que você domina ou que tenha
              interesse. Sinta-se livre, você pode editá-las depois.
            </p>
          </AuthHeader>

          <Skills />
        </>
      )}
    </AuthContainer>
  );
};

export default Register;
