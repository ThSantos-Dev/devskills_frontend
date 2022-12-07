export type TCompanyInfo = {
  id: number;
  nome_fantasia: string;
  logo: string;
  cnpj: string;
  biografia: string;
  email: string;
  empresaTelefone: TEmpresaTelefone[];
  enderecoEmpresa: TEnderecoEmpresa;
  empresaAvaliacao: TEmpresaAvaliacao[];
  provaAndamento: TProvaAndamento[];
  fotosAmbiente: TFotosAmbiente[];
  LoginEmpresa: TLoginEmpresa[];
};

export type TEmpresaTelefone = {
  id: number;
  numero: string;
  ddd: string;
};

export type TEnderecoEmpresa = {
  id: number;
  logradouro: string;
  bairro: string;
  cep: string;
  complemento: string;
  numero: string;
  cidade: TCidade;
};

export type TCidade = {
  id: number;
  nome: string;
  estado: TEstado;
};

export type TEstado = {
  id: number;
  nome: string;
};

export type TEmpresaAvaliacao = {
  id: number;
  comentario: string;
  estrelas: number;
};

export type TProvaAndamento = {
  prova: TProva;
};

export type TProva = {
  id: number;
  titulo: string;
  descricao: string;
  provaTipo: TProvaTipo;
  provaHabilidade: TProvaHabilidade[];
  provaStack: TProvaStack[];
};

export type TProvaTipo = {
  id: number;
};

export type TProvaHabilidade = {
  habilidade: THabilidade;
};

export type THabilidade = {
  id: number;
  nome: string;
  icone: string;
  ativo: boolean;
};

export type TProvaStack = {
  stack: TStack;
};

export type TStack = {
  nome: string;
};

export type TFotosAmbiente = {
  id: number;
  foto: string;
  legenda: string;
};

export type TLoginEmpresa = {
  id: number;
};
