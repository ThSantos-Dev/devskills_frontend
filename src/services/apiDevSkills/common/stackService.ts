/**
 * @author Thales Santos
 * @date 12/10/2022
 * @version 1.0
 * Classe responsável por fazer requsições HTTP para lidar com as Stacks
 */

// Utils
// import { requestConfig } from './../utils/request-config';

// Types
import { TStack } from "../../../types/devskills/stack/TStack";

// Env
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export type TResponse = {
  message?: string;
  error?: string;
  data?: TStack[];
};

export default class StackService {
  // Busca todos os Gêneros cadastrados
  static async getAll(): Promise<TResponse> {
    try {
      const res: TResponse = await fetch(BASE_URL + "/stack")
        .then((data) => data.json())
        .catch((error) => console.error(error));

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível buscar as stacks." };
    }
  }
}
