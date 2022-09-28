// Types
import { TCNPJResponse } from "../../types/apiBrasil/TCNPJResponse";

// Env
const BASE_URL = process.env.REACT_APP_API_BRASIL_URL + "/cnpj/v1";

export default class CNPJService {
  static async search(cnpj: string | number): Promise<TCNPJResponse | boolean> {
    console.log(BASE_URL)
    try {
      const res: Response = await fetch(BASE_URL + `/${cnpj}`);

      if(res.status !== 200)
        throw new Error()

      return await res.json();
    } catch (error) {
      return false;
    }
  }
}
