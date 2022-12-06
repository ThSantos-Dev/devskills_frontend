export type TCompanyInfo = {
  id: number;
  nome_fantasia: string;
  logo: string;
  biografia: string;
  empresaTelefone: TEmpresaTelefone[];
  enderecoEmpresa: TEnderecoEmpresa;
  empresaAvaliacao: any[];
  provaAndamento: TProvaAndamento[];
  fotosAmbiente: TFotosAmbiente[];
  Seguidores: TSeguidore[];
}

export type TEmpresaTelefone = {
  numero: string;
  ddd: string;
}

export type TEnderecoEmpresa = {
  logradouro: string;
  bairro: string;
  cep: string;
  complemento: string;
  numero: string;
  cidade: TCidade;
}

export type TCidade = {
  nome: string;
  estado: TEstado;
}

export type TEstado = {
  nome: string;
}

export type TProvaAndamento = {
  prova: TProva;
}

export type TProva = {
  id: number;
  titulo: string;
  descricao: string;
  provaHabilidade: TProvaHabilidade[];
}

export type TProvaHabilidade = {
  habilidade: THabilidade;
}

export type THabilidade = {
  id: number;
  nome: string;
  icone: string;
  ativo: boolean;
  stack: TStack;
}

export type TStack = {
  id: number;
  nome: string;
}

export type TFotosAmbiente = {
  id: number;
  foto: string;
  legenda: string;
}

export type TSeguidore = {
  usuario: TUsuario;
}

export type TUsuario = {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  data_nascimento: string;
  tag: string;
  ativo: boolean;
  pontuacao_plataforma: number;
  foto_perfil: any;
  biografia: any;
  link_github: any;
  link_portfolio: any;
  permissao_email: boolean;
  idGenero: number;
  createdAt: string;
  updatedAt: string;
}
