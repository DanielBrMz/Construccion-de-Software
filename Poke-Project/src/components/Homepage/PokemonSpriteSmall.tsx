import PokeBall from "./PokeBall";

const PokemonSpriteSmall = ({src, evo, name}:Record<string, string>) => {
  let evoImage;

  if (src) {
    evoImage = (
      <img
        src={src}
        alt="pokemon"
        className="pokemon-sprite pokemon-sprite-small"
      />
    );
  } else {
    evoImage = <PokeBall />;
  }

  return (
    <div>
      <div className="flex-center">
        <div className="evo-num">{evo}</div>
      </div>
      {evoImage}
      <div className="screen evo-name">{name || "No Data"}</div>
    </div>
  );
}

export default PokemonSpriteSmall;