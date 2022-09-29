// Type
import { TAdrress } from "../address/TAddress" 

export type TCompanyRegister = {
  cnpj: number | string;
  fantasy_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
  active: boolean;
  accept_terms: boolean;
  accept_email: boolean;
  address: TAdrress;
};