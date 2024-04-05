import PokemonSpriteSmall from "./PokemonSpriteSmall";

type PokemonEvolutionProps = {
  evoSprites: string[];
  evoNames: string[];
};

function PokemonEvolution({evoSprites, evoNames}: PokemonEvolutionProps) {
  const e1 = evoSprites[0];
  const e2 = evoSprites[1];
  const e3 = evoSprites[2];
  const n1 = evoNames[0];
  const n2 = evoNames[1];
  const n3 = evoNames[2];

  return (
    <div className="panel-row panel-evo">
      <PokemonSpriteSmall src={e1} evo="I" name={n1} />
      <PokemonSpriteSmall src={e2} evo="II" name={n2} />
      <PokemonSpriteSmall src={e3} evo="III" name={n3} />
    </div>
  );
}

export default PokemonEvolution;