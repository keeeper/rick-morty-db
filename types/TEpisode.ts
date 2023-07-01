import { TCharacter } from "./TCharacter";

export type TEpisode = {
  id: string;
  name: string;
  characters?: TCharacter[];
  episode?: string;
  air_date?: string;
  size?: string;
}