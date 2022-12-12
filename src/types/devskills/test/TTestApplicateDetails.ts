export type TTestApplicateDetails = {
  id: number;
  titulo: string;
  descricao: string;
  totalCandidatos: number;
  provaStacks: TProvaStack[];
  provaHabilidades: TProvaHabilidade[];
};

export type TProvaStack = {
  id: number;
  nome: string;
}

export type TProvaHabilidade = {
  id: number;
  nome: string;
  icone: string;
}
