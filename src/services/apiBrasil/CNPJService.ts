// Types
import { TCNPJResponse } from "../../types/apiBrasil/TCNPJResponse";

// Env
const BASE_URL = process.env.REACT_APP_API_BRASIL_URL + "/cnpj/v1";

export default class CNPJService {
  static async search(cnpj: string | number): Promise<TCNPJResponse | boolean> {
    console.log(BASE_URL)
    try {
      const res: TCNPJResponse = await fetch(BASE_URL + `/${cnpj}`)
        .then((data) => data.json())
        .catch((error) => console.error(error));

      console.log(res);
      return res;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
