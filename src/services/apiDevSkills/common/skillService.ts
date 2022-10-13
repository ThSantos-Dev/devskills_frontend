/**
 * @author Thales Santos
 * @date 12/10/2022
 * @version 1.0
 * Classe responsável por fazer requsições HTTP para lidar com as Skills
 */

// Utils
// import { requestConfig } from './../utils/request-config';

// Types
import { TSkill } from "../../../types/devskills/skill/TSkill";

// Env
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export type TResponse = {
  message?: string;
  error?: string;
  data?: TSkill[];
};

export default class SkillServe {
  // Busca todas as skills cadastradas
  static async getAll(): Promise<TResponse> {
    try {
      const res: TResponse = await fetch(BASE_URL + "/skill")
        .then((data) => data.json())
        .catch((error) => console.error(error));

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível buscar as skill." };
    }
  }
}
