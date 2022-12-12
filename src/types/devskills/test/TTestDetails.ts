export type TTestInfo = {
  titulo: string;
  descricao: string;
  duracao: string;
  totalCandidatos: number;
  dataFim: string;
  empresa: TEmpresa;
  tecnologias: TTecnologia[];
  stacks: TStack[];
  tipo: "PRATICA" | "TEORICA";
};

export type TEmpresa = {
  id: number;
  logo: any;
  nome: string;
};

export type TTecnologia = {
  habilidade: THabilidade;
};

export type THabilidade = {
  id: number;
  icone: string;
  nome: string;
};

export type TStack = {
  id: number;
  idProva: number;
  idProvaStack: number;
  stack: TStack2;
};

export type TStack2 = {
  id: number;
  nome: string;
};
