import { Photo } from "./photo";

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  gender: string;
  municipio: string;
  estado: string;
  pais: string;
  photos: Photo[];
}
