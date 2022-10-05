// Redux
import { register, reset } from "../../../slices/devSlice";

// Hooks 
import { useSelector, useDispatch } from "react-redux";

// SVG
import ilustration from "../../../assets/img/dev-ilustration.svg";

// Components
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister from "./Form/FormRegister";

// Types
import { TDevRegister } from "../../../types/devskills/dev/TDevRegister";
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import { useEffect } from "react";

const Register = () => {

  // Instanciando o Dispatch para ter acesso as funções do Redux
  const dispatch = useDispatch<any>()

  // Resgatando os estados do Redux
  const {loading, error } = useSelector((state: any) => state.dev)

  const handleOnSubmit = (data: TDevRegister) => {
    console.log(data);

    // Encaminhando os dados para o Redux realizar a requisição
    dispatch(register(data))
  };

  useEffect(() => {
    // Limapando os dados do Dev a cada renderização do Login
    dispatch(reset())
  }, [dispatch])

  return (
    <AuthContainer ilustration={{ src: ilustration, alt: "ilustração" }}>
        <AuthHeader title="Olá, Recruta!" subtitle="Experimente novos desafios">
          <p>
            Ao se cadastrar como <b>desenvolvedor</b> você terá acesso a
            desafios reais do mercado de trabalho que serão de grande
            aprendizado.
          </p>
        </AuthHeader>

        <FormRegister handleOnSubmit={handleOnSubmit} />
    </AuthContainer>
  );
};

export default Register;
