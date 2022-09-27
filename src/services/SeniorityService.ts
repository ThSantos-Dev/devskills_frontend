/**
 * @author Thales Santos
 * @date 26/09/2022
 * @version 1.0
 * Classe responsável por fazer requsições HTTP para lidar com Senioridade
 */

// Types
import { TSeniority } from "../types/seniority/TSeniority";

// Env
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class SeniorityService {
  // Busca todos as Senioridades cadastradas
  static async getAll(): Promise<TSeniority[] | boolean> {
    try {
      const res = await fetch(`${BASE_URL}/senioritys`)
        .then((data) => data.json())
        .catch((error) => console.error(error));

      return res;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
