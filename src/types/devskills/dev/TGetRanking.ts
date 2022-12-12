export type TGetRanking = {
  id: number;
  email: string;
  nome: string;
  foto_perfil?: string;
  usuarioHabilidade: TUsuarioHabilidade[];
  usuarioStack: TUsuarioStack[];
  pontuacao_plataforma: number;
  EnderecoUsuario: TEnderecoUsuario[];
};

export type TUsuarioHabilidade = {
  habilidade: THabilidade;
}

export type THabilidade = {
  id: number;
  icone: string;
  nome: string;
}

export type TUsuarioStack = {
  stack: TStack;
}

export type TStack = {
  id: number;
  nome: string;
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
