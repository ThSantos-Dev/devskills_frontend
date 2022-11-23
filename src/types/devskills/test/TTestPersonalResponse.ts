export type TData = {
  totalResults: number;
  result: TResult;
}

export type TResult = {
  idProvaAndamento: number;
  candidato: TCandidato[];
}

export type TCandidato = {
  id: number;
  idProvaUsuario: number;
  nome: string;
  tempo: string;
  corrigida: boolean;
  pontuacao: any;
  questoes: TQuest[];
}

export type TQuest = {
  id: number;
  enunciado: string;
  tipo: string;
  alternativas?: TAlternativa[];
  resposta?: TResposta;
}

export type TAlternativa = {
  id: number;
  texto: string;
  correta: boolean;
  selecionada: boolean;
}

export type TResposta = {
  id: number;
  texto: string;
}
