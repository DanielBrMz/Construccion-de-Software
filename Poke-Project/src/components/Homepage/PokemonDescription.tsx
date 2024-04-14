import { useContext } from "react";
import { NavigationContext } from "../../context/fightContext";
import { Pokemon } from "../../types/types";

const PokemonDescription = ({
  description,
  index,
  pData,
}: {
  description: number;
  index: number;
  pData: Pokemon;
}) => {
  const {
    firstPokemon,
    secondPokemon,
    setFirstPokemon,
    setSecondPokemon,
    setReadyForFight,
  } = useContext(NavigationContext);
  const onSelectClick = () => {
    if (index === 1 && !firstPokemon) setFirstPokemon(pData);
    else if (index === 1 && firstPokemon) setFirstPokemon(null);
    else if (index === 2 && !secondPokemon) setSecondPokemon(pData);
    else if (index === 2 && secondPokemon) setSecondPokemon(null);

    if (firstPokemon && secondPokemon) {setReadyForFight(true), console.log(firstPokemon, secondPokemon)}
    else setReadyForFight(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className="pokemon-description screen">{description}</div>
      <div className="select" onClick={onSelectClick}>
        {firstPokemon && index === 1
          ? "Selected"
          : secondPokemon && index === 2
          ? "Selected"
          : "Select"}
      </div>
    </div>
  );
};

export default PokemonDescription;
