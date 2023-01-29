type LocationType = {
  name: string;
}

export interface CharacterType {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  location: LocationType;
}
