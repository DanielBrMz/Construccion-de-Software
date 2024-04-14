import React, { createContext } from "react";
import { FightContextState, Pokemon } from "../types/types";

export const NavigationContext = createContext<FightContextState>(
  {} as FightContextState
);

export const FightContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [firstPokemon, setFirstPokemon] = React.useState<Pokemon | null>(null);
  const [secondPokemon, setSecondPokemon] = React.useState<Pokemon | null>(
    null
  );
  const [lastWinner, setLastWinner] = React.useState<Pokemon | null>(null);
  const [lastLoser, setLastLoser] = React.useState<Pokemon | null>(null);
  const [readyForFight, setReadyForFight] = React.useState<boolean>(false);
  const [fightingNow, setFightingNow] = React.useState<boolean>(false);

  return (
    <NavigationContext.Provider
      value={{
        firstPokemon,
        setFirstPokemon,
        secondPokemon,
        setSecondPokemon,
        lastWinner,
        setLastWinner,
        lastLoser,
        setLastLoser,
        readyForFight,
        setReadyForFight,
        fightingNow,
        setFightingNow,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
