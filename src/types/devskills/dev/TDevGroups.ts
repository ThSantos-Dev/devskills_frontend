export type TDevGroup = {
    grupo: {
        id: number,
        nome: string,
        descricao: string,
        status: boolean,
        provaGrupo:
        {
            provaAndamento: {
                empresa: {
                    id: number,
                    nome_fantasia: string,
                    logo: string,
                    ativo: boolean
                },
                prova: {
                    id: number,
                    titulo: string,
                    descricao: string,
                    ativo: boolean
                }
            }
        }[]
    }
}