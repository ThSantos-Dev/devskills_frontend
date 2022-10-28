export type TTestRealize = {
  id: number;
  data_inicio: string;
  data_fim: string;
  duracao: string;
  idEmpresa: number;
  idProva: number;
  prova: TProva;
}

export type TProva = {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  link_repositorio: string;
  ultima_atualizacao: any;
  idProvaTipo: number;
  provasTodasQuestoes: TProvasTodasQuest[];
}

export type TProvasTodasQuest = {
  id: number;
  idQuestaoProva: number;
  idProva: number;
  questaoProva: TQuestaoProva;
}

export type TQuestaoProva = {
  alternativaProva: TAlternativaProva[];
  id: number;
  enunciado: string;
  foto: string;
  questaoProvaTipo: TQuestaoProvaTipo;
}

export type TAlternativaProva = {
  opcao: string;
  id: number;
  idQuestaoProva: number;
}

export interface TQuestaoProvaTipo {
  tipo: "DISSERTATIVA" | "MULTIPLA_ESCOLHA" | "UNICA_ESCOLHA";
  id: number;
}
