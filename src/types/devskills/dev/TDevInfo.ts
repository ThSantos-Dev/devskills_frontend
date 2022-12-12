export type TDevInfo = {
    ativo: boolean;
    biografia: string;
    cpf: string;
    createdAt: string;
    data_nascimento: string;
    email: string;
    foto_perfil: string;
    genero: {
        id: number,
        nome: string
    };
    id: number;
    idGenero: number;
    link_github: string;
    link_portfolio: string;
    nome: string;
    permissao_email: boolean;
    pontuacao_plataforma: number;
    tag: string;
    updatedAt: string;
    EnderecoUsuario: {
        id: number,
        logradouro: string,
        numero: string,
        bairro: string,
        cidade: {
            id: number,
            nome: string
        },
        complemento: string
    }[];
    UsuarioTelefone: {
        id: number
        ddd: string
        numero: string
        tipoTelefone: {
            id: 1,
            nome: string
        }
    }[]
    usuarioHabilidade: {
        idHabilidade: number,
        habilidade: {
            id: number,
            nome: string,
            icone: string,
            ativo: boolean,
            idStack: number,
            idHabilidadeTipo: number
        }
    }[];
    usuarioStack: {
        stack: {
            id: number,
            nome: string
        }
    }[]
    usuarioProva: TTest[]
};

export type TTest = {
    id: number,
    pontuacao: null,
    provaAndamento: {
        id: number,
        prova: {
            titulo: string,
            descricao: string,
            provaStack:
            {
                idProvaStack: number,
                stack: {
                    id: number,
                    nome: string
                }
            }[],
            provaHabilidade:
            {
                idHabilidade: number,
                habilidade: {
                    id: number,
                    nome: string,
                    icone: string,
                    ativo: boolean,
                    idStack: number,
                    idHabilidadeTipo: number
                }
            }[]

        }
    }
}