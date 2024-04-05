import { useState } from "react";
import SpriteControls from "./SpriteControls";

type PokemonSpriteProps = {
  front: boolean;
  shiny: boolean;
  female: boolean;
};

const PokemonSprite = ({ src }: { src: Record<string, string> }) => {
  const [state, setState] = useState<PokemonSpriteProps>({
    front: true,
    shiny: false,
    female: false,
  });

  const buildImage = (): string => {
    const dir = state.front ? "front" : "back";
    const gender = state.female ? "_female" : "";
    const shiny = state.shiny ? "_shiny" : "_default";
    // console.log(dir + shiny + gender);
    return dir + shiny + gender;
  };

  const toggleGender = () => {
    setState({ ...state, female: !state.female });
  };

  const toggleShiny = () => {
    // console.log("toggling shiny");
    setState({ ...state, shiny: !state.shiny });
  };

  const toggleFront = () => {
    // console.log("toggling front");
    setState({ ...state, front: !state.front });
  };

  const imgSrc = src[buildImage()] || src["front_default"];
  const funcs = {
    gender: toggleGender,
    front: toggleFront,
    shiny: toggleShiny,
  };
  return (
    <div>
      <img src={imgSrc} alt="pokemon" className="pokemon-sprite" />
      <SpriteControls
        funcs={funcs}
        gender={state.female}
        shiny={state.shiny}
        front={state.front}
      />
    </div>
  );
};

export default PokemonSprite;