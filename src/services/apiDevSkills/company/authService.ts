// Arquivo de configurações de requisição
import { TCompanyRegister } from "../../../types/devskills/company/TCompanyRegister";
import { requestConfig } from "../../../utils/request-config";

// URL da API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Types
export type TResponse = {
  message?: string;
  error?: string;
  newCompany?: any;
}

export default class authService {
  // Registra uma  Company
  static async register(data: TCompanyRegister): Promise<TResponse> {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
      // Realizando a requisição para cadastrar umacompany
      const res: TResponse = await fetch(BASE_URL + "/company", config)
        .then((res) => res.json())
        .catch((err) => err);

      // Se deu tudo certo, encaminho o token do usuário para o LocalStorage
      if (res) {
        localStorage.setItem("user", JSON.stringify(res));
      }

      return res;
    } catch (error) {
      console.error(error);
      return {error: 'Não foi possível realizar a solicitação.'}
    }
  }

  // Login da company
  static async login(data: any) {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
      // Realizando requisição para efetuar o login
      const res: any = fetch(BASE_URL + "/company/login", config)
        .then((res) => res.json())
        .catch((err) => err);

      // Validando o retorno da API
      if (res.id) localStorage.setItem("user", JSON.stringify(res));

      return res;
    } catch (error) {
      console.error(error);
    }
  }
}
