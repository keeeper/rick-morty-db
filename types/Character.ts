import CharacterLocation from "./CharacterLocation";
import Episode from "./Episode";
import Origin from "./CharacterOrigin";

export type Character = {
  id: string,
  image: string,
  name: string,
  location?: CharacterLocation,
  gender?: string,
  episode?: Episode,
  status?: string,
  type?: string,
  species?: string,
  origin?: Origin,
}