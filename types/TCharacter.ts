import { TCharacterLocation } from "./TCharacterLocation";
import { TEpisode } from "./TEpisode";
import { TCharacterOrigin } from "./TCharacterOrigin";

export type TCharacter = {
  id: string,
  name: string,
  image: string,
  location?: TCharacterLocation,
  gender?: string,
  episode?: TEpisode,
  status?: string,
  type?: string,
  species?: string,
  origin?: TCharacterOrigin,
}