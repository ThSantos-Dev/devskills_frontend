// export interface Root {
//   data: Data;
// }

export type TTestTemplateDetails = {
  id: number;
  idAdministrador: number;
  idProva: number;
  provas: TProvas;
};

export type TProvas = {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  link_repositorio: string;
  ultima_atualizacao: any;
  idProvaTipo: number;
  provaAndamento: TProvaAndamento[];
  provaHabilidade: TProvaHabilidade[];
  provaStack: TProvaStack[];
  provasTodasQuestoes: TProvasTodasQuest[];
};

export type TProvaAndamento = {
  id: number;
  data_inicio: string;
  data_fim: string;
  duracao: string;
  idEmpresa: number;
  idProva: number;
};

export type TProvaHabilidade = {
  habilidade: THabilidade;
};

export type THabilidade = {
  icone: string;
  id: number;
  nome: string;
};

export type TProvaStack = {
  stack: TStack;
};

export type TStack = {
  nome: string;
};

export type TProvasTodasQuest = {
  id: number;
  idQuestaoProva: number;
  idProva: number;
  questaoProva: TQuestaoProva;
};

export type TQuestaoProva = {
  id: number;
  enunciado: string;
  foto: string;
  idQuestaoProvaTipo: number;
  alternativaProva: TAlternativaProva[];
  questaoProvaTipo: TQuestaoProvaTipo;
};

export type TAlternativaProva = {
  id: number;
  opcao: string;
  correta: boolean;
  idQuestaoProva: number;
};

export type TQuestaoProvaTipo = {
  id: number;
  tipo: "DISSERTATIVA" | "MULTIPLA_ESCOLHA" | "UNICA_ESCOLHA";
};
