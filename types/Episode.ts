import Character from "./Character";

export type Episode = {
  id: string;
  name: string;
  characters?: Character;
  episode?: string;
  air_date?: string;
}