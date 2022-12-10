export type TGetGrouDetails = {
  id: number;
  nome: string;
  descricao: string;
  status: boolean;
  grupoUsuario: TGrupoUsuario[];
  provaGrupo: TProvaGrupo[];
}

export type TGrupoUsuario = {
  usuario: TUsuario;
}

export type TUsuario = {
  id: number;
  nome: string;
  email: string;
  foto_perfil: any;
  convite: TConvite[];
  EnderecoUsuario: TEnderecoUsuario[];
}

export type TConvite = {
  conviteStatus: TConviteStatus;
}

export type TConviteStatus = {
  id: number;
  status: string;
}

export type TEnderecoUsuario = {
  cidade: TCidade;
}

export type TCidade = {
  nome: string;
  estado: TEstado;
}

export type TEstado = {
  id: number;
  nome: string;
}

export type TProvaGrupo = {
  provaAndamento: TProvaAndamento;
}

export type TProvaAndamento = {
  id: number;
  prova: TProva;
}

export type TProva = {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  provaStack: TProvaStack[];
  provaHabilidade: TProvaHabilidade[];
}

export type TProvaStack = {
  stack: TStack;
}

export type TStack = {
  id: number;
  nome: string;
}

export type TProvaHabilidade = {
  habilidade: THabilidade;
}

export type THabilidade = {
  id: number;
  nome: string;
  icone: string;
}
