
// SVG
import ilustration from "../../../assets/img/dev-ilustration.svg";
import logo from "../../../assets/img/logo.svg";

// Components
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister from "./Form/FormRegister";

// Types
import { TDevRegister } from "../../../types/dev/TDevRegister";
import AuthContainer from "../../../components/shared/Auth/AuthContainer";

const Register = () => {
  const handleOnSubmit = (data: TDevRegister) => {
    console.log(data);
  };

  return (
    <AuthContainer ilustration={{ src: ilustration, alt: "ilustração" }}>
      <>
        <AuthHeader title="Olá, Recruta!" subtitle="Experimente novos desafios">
          <p>
            Ao se cadastrar como <b>desenvolvedor</b> você terá acesso a
            desafios reais do mercado de trabalho que serão de grande
            aprendizado.
          </p>
        </AuthHeader>

        <FormRegister handleOnSubmit={handleOnSubmit} />
      </>
    </AuthContainer>
  );
};

export default Register;
