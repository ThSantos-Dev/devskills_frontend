// Utils
import { requestConfig } from "./../../../utils/request-config";

// URL da API
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const forgotPasswordService = async (data: {
  login: string;
  type: "DEVELOPER" | "ADMIN" | "COMPANY";
}): Promise<{ message?: string; error?: string }> => {
  // Configurando a requisição
  const config = requestConfig("POST", data);

  const endpoint =
    data.type === "DEVELOPER" ? "/developer/forgotPassword" : "/forgot_pass";

  try {
    if (data.type === "DEVELOPER") {
      const res = await fetch(BASE_URL + endpoint, config)
        .then((data) => data.json())
        .catch((err) => err);

      return res;
    } else if (data.type === "COMPANY") {
      const res = await fetch(BASE_URL + endpoint, config);

      if (res.status === 200) return { message: "Código enviado com sucesso!" };
    }

    return {
      error: "Falha ao enviar o código, verifique se o e-mail está correto.",
    };
  } catch (error) {
    console.error(error);
    return { error: "Não foi possível processar a solicitação." };
  }
};
