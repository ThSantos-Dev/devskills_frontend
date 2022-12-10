export type TGetAllGroupCompany = {
  provaAndamento: TProvaAndamento[];
}

export type TProvaAndamento = {
  prova: TProva;
  empresa: TEmpresa;
}

export type TProva = {
  id: number;
  descricao: string;
  titulo: string;
  ativo: boolean;
  provaHabilidade: TProvaHabilidade[];
  provaStack: TProvaStack[];
  provaAndamento: TProvaAndamento2[];
}

export type TProvaHabilidade = {
  habilidade: THabilidade;
}

export type THabilidade = {
  id: number;
  nome: string;
  icone: string;
}

export type TProvaStack = {
  stack: TStack;
}

export type TStack = {
  id: number;
  nome: string;
}

export type TProvaAndamento2 = {
  provaGrupo: TProvaGrupo[];
}

export type TProvaGrupo = {
  grupo: TGrupo;
}

export type TGrupo = {
  id: number;
  nome: string;
  descricao: string;
  status: boolean;
  grupoUsuario: TGrupoUsuario[];
}

export type TGrupoUsuario = {
  usuario: TUsuario;
}

export type TUsuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
  EnderecoUsuario: any[];
  _count: TCount;
}

export type TCount = {
  grupoUsuario: number;
}

export type TEmpresa = {
  id: number;
  nome_fantasia: string;
}
