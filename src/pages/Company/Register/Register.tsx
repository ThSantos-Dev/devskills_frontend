// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from '../../../components/shared/Auth/AuthHeader';

// SVG
import ilustration from "../../../assets/img/comapny-ilustration.svg";
import FormRegister from "./Form/FormRegister";

// Types
import { TCompanyRegister } from "../../../types/devskills/company/TCompanyRegister";

interface Props {}

const Register = (props: Props) => {

  const handleSubmit = (data: TCompanyRegister) => {
    console.log(data)
  }

  return (
    <div>
      <AuthContainer
        ilustration={{ src: ilustration, alt: "company-ilustration" }}
      >
        <AuthHeader
          title="Bem-vindo, recrutador!"
          subtitle="Experimente novos desafios"
        >
          <p>
            Ao se cadastrar como <b>empresa</b>, você terá acesso a desafios
            reais do mercado de trabalho, que serão de grande aprendizado.
          </p>
        </AuthHeader>

        <FormRegister handleSubmit={handleSubmit} />
      </AuthContainer>
    </div>
  );
};

export default Register;
