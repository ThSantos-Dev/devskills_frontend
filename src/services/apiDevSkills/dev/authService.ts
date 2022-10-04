// Arquivo de configurações de requisição
import { requestConfig } from "../../../utils/request-config";

// URL da API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class authService {
  // Registra um dev
  static async devRegister(data: JSON | undefined) {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
        // Realizando a requisição para cadastrar um DEV
      const res = await fetch(BASE_URL + "/dev/register", config)
        .then((res) => res.json())
        .catch((err) => err);

        // Se deu tudo certo, encaminho o token do usuário para o LocalStorage
        if(res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

    } catch (error) {
      console.error(error);
    }
  }
}
