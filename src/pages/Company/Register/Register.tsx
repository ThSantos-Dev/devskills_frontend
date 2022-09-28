// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from '../../../components/shared/Auth/AuthHeader';

// SVG
import ilustration from "../../../assets/img/comapny-ilustration.svg";
import FormRegister from "./Form/FormRegister";

interface Props {}

const Register = (props: Props) => {
  return (
    <div>
      <AuthContainer ilustration={{ src: ilustration, alt: "company-ilustration" }}>
        <AuthHeader
          title="Bem-vindo, recrutador!"
          subtitle="Experimente novos desafios"
        >
          <p>
            Ao se cadastrar como <b>empresa</b>, você terá acesso a desafios
            reais do mercado de trabalho, que serão de grande aprendizado.
          </p>
        </AuthHeader>

        <FormRegister />
      </AuthContainer>
    </div>
  );
};

export default Register;
