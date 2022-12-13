// Arquivo de configurações de requisição
import { TCompanyLogin } from "../../../types/devskills/company/TCompanyLogin";
import { TCompanyRegister } from "../../../types/devskills/company/TCompanyRegister";
import { requestConfig } from "../../../utils/request-config";

// URL da API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Types
export type TRegisterResponse = {
  message?: string;
  error?: string;
  newCompany?: any;
}

export type TLoginResponse = {
  data?: {
    nome: string;
    idEmpresa: number;
    type: "COMPANY";
    logo: string;
  };
  token?: string;

  error?: string;
};

export default class authService {
  // Registra uma  Company
  static async register(data: TCompanyRegister): Promise<TRegisterResponse> {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
      console.log(data);
      // Realizando a requisição para cadastrar umacompany
      const res: TRegisterResponse = await fetch(BASE_URL + "/company", config)
        .then((res) => res.json())
        .catch((err) => err);

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível realizar a solicitação." };
    }
  }

  // Login da company
  static async login(data: TCompanyLogin): Promise<TLoginResponse> {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
      // Realizando requisição para efetuar o login
      const res: TLoginResponse = await fetch(BASE_URL + "/auth", config)
        .then((res) => res.json())
        .catch((err) => err);

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível realizar a solicitação." };
    }
  }
}
