export interface Root {
  data: Data;
}

export interface Data {
  page: number;
  totalPages: number;
  results: Result[];
}

export interface Result {
  provas: Provas;
}

export interface Provas {
  id: number;
  titulo: string;
  descricao: string;
  provaTipo: ProvaTipo;
  provaHabilidade: ProvaHabilidade[];
  provaStack: ProvaStack[];
}

export interface ProvaTipo {
  tipo: string;
}

export interface ProvaHabilidade {
  habilidade: Habilidade;
}

export interface Habilidade {
  id: number;
  nome: string;
  icone: string;
}

export interface ProvaStack {
  stack: Stack;
}

export interface Stack {
  id: number;
  nome: string;
}
