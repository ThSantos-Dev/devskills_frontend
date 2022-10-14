export type TCompanyRegister = {
  cnpj: string;
  nome_fantasia: string;
  email:string;
  senha: string;
  confirmar_senha: string;
  permissao_email: boolean;

  ddd: string;
  numero_telefone: string;


  cep: string;
  logradouro: string;
  numero_rua: string;
  complemento?: string;
  bairro: string;
  nome_cidade: string;
  estado: string;
}