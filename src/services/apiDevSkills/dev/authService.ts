// Arquivo de configurações de requisição
import { TDevLogin } from "../../../types/devskills/dev/TDevLogin";
import { TDevRegister } from "../../../types/devskills/dev/TDevRegister";
import { requestConfig } from "../../../utils/request-config";

// URL da API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Types
type TDevRegisterResponse = {
  error?: string;
  message?: string;
};

type TDevLoginResponse = {
  error?: string;
  message?: string;

  id?: number;
  type?: "DEVELOPER";
  token?: string;
};

export default class authService {
  // Registra um dev
  static async register(data: TDevRegister): Promise<TDevRegisterResponse> {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
      // Realizando a requisição para cadastrar um DEV
      const res: TDevRegisterResponse = await fetch(
        BASE_URL + "/developer",
        config
      )
        .then((res) => res.json())
        .catch((err) => err);

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Deu ruim!" };
    }
  }

  // Login do dev
  static async login(data: TDevLogin): Promise<TDevLoginResponse> {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
      // Realizando requisição para efetuar o login
      const res: TDevLoginResponse = await fetch(
        BASE_URL + "/developer/login",
        config
      )
        .then((res) => {
          if (res.status === 401)
            return { error: "Usuário ou senha inválidas." };

          return res.json();
        })
        .catch((err) => err);

      // Validando o retorno da API
      if (res.token) localStorage.setItem("user", JSON.stringify(res));

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Deu ruim" };
    }
  }
}
