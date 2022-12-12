
export type TGetTestRecommeded = {
  id: number;
  empresa: TEmpresa;
  prova: TProva;
}

export type TEmpresa = {
  logo?: string;
}

export type TProva = {
  provaHabilidade: TProvaHabilidade[];
  provaStack: TProvaStack[];
  provaTipo: TProvaTipo;
  titulo: string;
  descricao: string;
}

export type TProvaHabilidade = {
  habilidade: THabilidade;
}

export type THabilidade = {
  id: number;
  icone: string;
  nome: string;
}

export type TProvaStack = {
  stack: TStack;
}

export type TStack = {
  id: number;
  nome: string;
}

export type TProvaTipo = {
  id: number;
  tipo: string;
}
