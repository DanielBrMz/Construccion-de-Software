
export type Pokemon = {
  name: string;
  sprites: Record<string, string>;
  types: Types;
  stats: Stats;
  moves: Move[];
};


export type FightContextState = {
  firstPokemon: Pokemon | null;
  setFirstPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  secondPokemon: Pokemon | null;
  setSecondPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  lastWinner: Pokemon | null;
  setLastWinner: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  lastLoser: Pokemon | null;
  setLastLoser: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  readyForFight: boolean;
  setReadyForFight: React.Dispatch<React.SetStateAction<boolean>>;
  fightingNow: boolean;
  setFightingNow: React.Dispatch<React.SetStateAction<boolean>>;
}