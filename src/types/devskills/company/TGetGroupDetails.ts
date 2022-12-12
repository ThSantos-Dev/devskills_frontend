export type TGetGrouDetails = {
  groupInfo: TGroupInfo
  usersOfGroup: TUsersOfGroup[]
  testsOfGroup: TTestsOfGroup[]
}

export type TGroupInfo = {
  id: number
  nome: string
  descricao: string
  status: boolean
}

export type TUsersOfGroup = {
  conviteStatus: TConviteStatus
  usuario: TUsuario
}

export type TConviteStatus = {
  id: number
  status: string
}

export type TUsuario = {
  id: number
  foto_perfil: any
  email: string
  nome: string
  EnderecoUsuario: TEnderecoUsuario[]
}

export type TEnderecoUsuario = {
  cidade: TCidade
}

export type TCidade = {
  nome: string
  estado: TEstado
}

export type TEstado = {
  id: number
  nome: string
}

export type TTestsOfGroup = {
  provaAndamento: TProvaAndamento
}

export type TProvaAndamento = {
  id: number
  data_fim: string
  prova: TProva
}

export type TProva = {
  id: number
  titulo: string
  descricao: string
  ativo: boolean
}
