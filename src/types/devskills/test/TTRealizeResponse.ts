export type TTestRealizeResponse = {
  id_usuario: number;
  id_prova_andamento: number;

  finalizada: boolean;
  data_entrega?: string;

  respostas?: TTestRealizeQuestionResponse[];
};

export type TTestRealizeQuestionResponse = {
  id_questao: number;

  id_alternativa?: number | number[];
  resposta?: string;
}
