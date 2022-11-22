export type TTestOfCompany = {
  totalPages: number;
  totalResult: number;
  page: number;
  results: TResult[];
};

export type TResult = {
  id: number;
  data_inicio: string;
  data_fim: string;
  duracao?: string;
  idEmpresa: number;
  idProva: number;
  prova: TProva;
}

export type TProva = {
  id: number;
  titulo: string;
  ativo: boolean;
  descricao: string;
  provaTipo: TProvaTipo;
  provaHabilidade: TProvaHabilidade[];
  provaStack: TProvaStack[];
}

export type TProvaTipo = {
  tipo: string;
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
