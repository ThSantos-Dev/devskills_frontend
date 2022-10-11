/**
 * @author Thales Santos
 * @date 25/09/2022
 * @version 1.0
 * Classe responsável por fazer requsições HTTP para lidar com Gêneros
 */

// Utils
// import { requestConfig } from './../utils/request-config';

// Types
import { TGender } from "../../../types/devskills/gender/TGender";

// Env
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export type TResponse = {
  message?: string;
  error?: string;
  data?: TGender[];
};

export default class GenderService {
  // Busca todos os Gêneros cadastrados
  static async getAll(): Promise<TResponse> {
    try {
      const res: TResponse = await fetch(`${BASE_URL}/gender`)
        .then((data) => data.json())
        .catch((error) => console.error(error));

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível buscar os gêneros." };
    }
  }
}
