/**
 * @author Thales Santos
 * @date 25/09/2022
 * @version 1.0
 * Classe responsável por fazer requsições HTTP para lidar com Gêneros
 */

// Utils
// import { requestConfig } from './../utils/request-config';

// Types
import { TGenre } from '../../types/devskills/genre/TGenre';

// Env
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class GenreService {
  // Busca todos os Gêneros cadastrados
  static async getAll(): Promise<TGenre[] | boolean> {
    try {
      const res = await fetch(`${BASE_URL}/genres`)
        .then((data) => data.json())
        .catch((error) => console.error(error));

        return res
    } catch (error) {
        console.error(error);
        return false
    }
  }
}
