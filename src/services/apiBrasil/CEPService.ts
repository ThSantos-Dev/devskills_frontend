// Types
import { TCEPResponse } from "../../types/apiBrasil/TCEPResponse";

// Env
const BASE_URL = process.env.REACT_APP_API_BRASIL_URL + "/cep/v2";

export default class CEPService {
    static async search(cep: number | string): Promise<TCEPResponse | boolean> {
        try {
      const res: TCEPResponse = await fetch(BASE_URL + `/${cep}`)
        .then((data) => data.json())
        .catch((error) => console.error(error));

        return res

        } catch (error) {
            console.error(error)
            return false
        }
    }
}