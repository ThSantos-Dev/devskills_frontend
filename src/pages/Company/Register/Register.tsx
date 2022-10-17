// Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../slices/company/companySlice";

// Components
import AuthContainer from "../../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../../components/shared/Auth/AuthHeader";
import FormRegister from "./Form/FormRegister";

// SVG
import ilustration from "../../../assets/img/comapny-ilustration.svg";

// Notificações
import { toast } from "react-toastify";

// Types
import { TFormCompanyRegister } from "./Form/FormRegister";
import { TCompanyRegister } from "../../../types/devskills/company/TCompanyRegister";

interface Props {}

const Register = (props: Props) => {
  // Responsável por armazenar o id do Tost para atualizações
  const [idToast, setIdToast] = useState<any>();

  // Resgatando o Redux da Company
  const { success, error, loading } = useSelector(
    (state: any) => state.company
  );

  // Instanciando o dispatch para ter acesso as funções do Redux
  const dispatch = useDispatch<any>();

  // Responsável por redirecionamentos
  const navigate = useNavigate();

  const handleSubmit = (data: TFormCompanyRegister) => {
    const dataFormated: TCompanyRegister = {
      cnpj: data.cnpj,
      email: data.email,
      nome_fantasia: data.fantasy_name,
      senha: data.password,
      confirmar_senha: data.confirmPassword,
      ddd: data.telephone.slice(0, 2),
      numero_telefone: data.telephone.slice(2),
      logradouro: data.address.public_place,
      numero_rua: data.address.number,
      bairro: data.address.district,
      complemento: data.address.complement,
      nome_cidade: data.address.city.name,
      estado: data.address.state.name,
      cep: data.address.zip_code,
      permissao_email: data.accept_email
    };

    dispatch(register(dataFormated));
  };

  useEffect(() => {
    if (loading && !idToast) setIdToast(toast.loading("Processando..."));

    if (success) {
      toast.update(idToast, {
        render: "Cadastro realizado com sucesso! Efetue o login.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      navigate("/company/login");
    }

    if (error) {
      toast.update(idToast, {
        render: error,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

  }, [success, error, loading, idToast, navigate]);

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
