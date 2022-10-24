import { requestConfig } from './../../../utils/request-config';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class TestService {
    static async create(data: any, token: string) {
        // Configurando a requisição
        const config = requestConfig("POST", data, token)

        try {
            
             const res = await fetch(BASE_URL + "/test" , config)

            if(res.status !== 201)
                return {error: await res.json()}

            return {message: "Prova cadastrada com sucesso!"}

        } catch (error) {
            console.error(error)
            return {error: error}
        }
    }
}