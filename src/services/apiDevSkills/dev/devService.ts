import { requestConfig } from "../../../utils/request-config";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
 
export default class DevService {
  static async getProfileData(id: number, token: string) {
    const config = requestConfig("GET", undefined, token);
 
    try {
      const res = await fetch(
        BASE_URL + `/dev/profile/${id}`,
        config
      ).then((data) => data.json());
 
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  }
