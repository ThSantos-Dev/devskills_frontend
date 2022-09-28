export type TCEPResponse = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: Location;
}

type Location = {
  type: string;
  coordinates: Coordinates;
}

type Coordinates = {
  longitude: string;
  latitude: string;
}
