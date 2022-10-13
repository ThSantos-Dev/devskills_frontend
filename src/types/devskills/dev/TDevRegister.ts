export type TDevRegister = {
  nome: string
  email: string
  senha: string
  cpf: string
  id_genero: number
  data_nascimento: string
  numero: string
  ddd: string
  confirmar_senha: string
  id_tipo_telefone: number
  permissao_email: boolean

  ids_habilidades?: number[] | null
  ids_stacks?: number[] | null
}
