import { TStartTest } from "../../../types/devskills/test/TStartTest";
import { requestConfig } from "./../../../utils/request-config";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class TestService {
  static async create(data: any, token: string) {
    // Configurando a requisição
    const config = requestConfig("POST", data, token);

    try {
      const res = await fetch(BASE_URL + "/test", config);

      if (res.status !== 201) return { error: await res.json() };

      return { message: "Prova cadastrada com sucesso!" };
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  }

  static async getAllTemplates(token?: string) {
    try {
      const res = await fetch(BASE_URL + "/test/admin").then((data) =>
        data.json()
      );

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi posssivel efetuar a busca de informações" };
    }
  }

  static async getAllOfCompany(token: string) {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = await fetch(BASE_URL + "/company/tests", config);

      if (res.status === 401) throw new Error();

      return await res.json();
    } catch (error) {
      console.error(error);
      return { error: "Não foi possivel concluir a sua solicitação." };
    }
  }

  static async filterAllOfCompany(filters: string, token: string) {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = await fetch(BASE_URL + "/test/admin?" + filters, config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.log(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async filterTestOfCompany(filters: string, token: string) {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = await fetch(
        BASE_URL + "/company/tests?" + filters,
        config
      ).then((data) => data.json());

      return res;
    } catch (error) {
      console.log(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async filterTemplates(filters: string, token?: string) {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = await fetch(BASE_URL + "/test/admin?" + filters, config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.log(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async getTemplateById(id: string, token?: string) {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = fetch(BASE_URL + "/test/admin/" + id, config).then((data) =>
        data.json()
      );

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async useTemplate(data: any, token: string): Promise<any> {
    const config = requestConfig("POST", data, token);

    try {
      const res = await fetch(BASE_URL + "/test/template", config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async getToRealizeById(id: number, token: string): Promise<any> {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = await fetch(BASE_URL + "/developer/test/" + id, config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }

  static async startTest(data: TStartTest, token: string): Promise<any> {
    const config = requestConfig("POST", data, token);

    try {
      const res = await fetch(BASE_URL + "/developer/userTest", config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Não foi possível concluir a solicitação." };
    }
  }
}
