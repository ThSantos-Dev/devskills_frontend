import { requestConfig } from "../../../utils/request-config";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class UserService {
  static async getAll() {
    try {
      const res = await fetch(BASE_URL + "/developer/getAllUsers").then(
        (data) => data.json()
      );

      return res;

    } catch (error) {
      console.error(error);
    }
  }
}