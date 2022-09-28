// Types
import { TCity } from "./TCity";
import { TState } from "./TState";

export type TAdrress = {
  id?: number;
  public_place: string;
  number: string;
  district: string;
  zip_code: string;
  complement?: string;
  city: TCity;
  state: TState;
};
