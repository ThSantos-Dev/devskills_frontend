export type TCandidatesRanking = {
  id_prova_usuario: number;
  id_prova_andamento: number;
  finalizada: boolean;
  duracao?: string;
  pontuacao: any;
  porcentagemAcertos: any;
  corrigida: boolean;
  candidato: TCandidato;
}

export type TCandidato = {
  id: number;
  nome: string
  email: string;
  foto_perfil: string;
  idade: number;
  localidade: TLocalidade
}

export type TLocalidade = {
  estado?: string;
  cidade?: string;
}
