import { requestConfig } from "../../../utils/request-config";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class candidatesService {
  static async getByIndex(
    idTest: number,
    index: number,
    token: string
  ): Promise<any> {
    try {
      const res = await fetch(
        BASE_URL + `/test/${idTest}/answers/${index}`
      ).then((data) => data.json());

      return res;
    } catch (error) {
      console.log(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async sendCorrection(
    idTest: number,
    data: any,
    token: string
  ): Promise<any> {
    const config = requestConfig("PUT", data, token);

    try {
      const res = await fetch(BASE_URL + `/test/${idTest}/correction`, config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.log(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }
}
