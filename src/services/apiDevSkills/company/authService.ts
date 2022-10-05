// Arquivo de configurações de requisição
import { requestConfig } from "../../../utils/request-config";

// URL da API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class authService {
  // Registra uma  Company
  static async register(data: any) {
    // Configurando a requisição
    const config = requestConfig("POST", data);

    try {
        // Realizando a requisição para cadastrar umacompany
      const res = await fetch(BASE_URL + "/company/register", config)
        .then((res) => res.json())
        .catch((err) => err);

        // Se deu tudo certo, encaminho o token do usuário para o LocalStorage
        if(res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res
    } catch (error) {
      console.error(error);
    }
  }
  
  // Login da company
  static async login (data: any) {
    // Configurando a requisição
    const config = requestConfig("POST", data)

    try {
      // Realizando requisição para efetuar o login
      const res: any = fetch(BASE_URL + '/company/login', config).then((res) => res.json()).catch(err => err)

      // Validando o retorno da API
      if(res.id) 
        localStorage.setItem('user', JSON.stringify(res))

      return res


    } catch (error) {
      console.error(error)
    }
  }

}
