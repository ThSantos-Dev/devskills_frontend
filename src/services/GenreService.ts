/**
 * @author Thales Santos
 * @date 25/09/2022
 * @version 1.0
 * Classe responsável por fazer requsições HTTP para lidar com Gêneros
 */

// Utils
import { requestConfig } from './../utils/request-config';

// Env
const BASE_URL = process.env.BASE_URL;

// Types
export type Genre = {
  id: number;
  name: string;
};

export default class GenreService {
  // Busca todos os Gêneros cadastrados
  static async getAll(): Promise<Genre[] | boolean> {

    console.log(BASE_URL)

    try {
      const res = await fetch(`${BASE_URL}/genres`)
        .then((data) => data.json())
        .catch((error) => console.error(error));


        console.log(res)

        return res
    } catch (error) {
        console.error(error);
        return false
    }
  }
}
