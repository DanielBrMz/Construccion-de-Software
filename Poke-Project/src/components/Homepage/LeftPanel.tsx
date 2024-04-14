import Loading from "./Loading";
import PokemonDescription from "./PokemonDescription";
import PokemonName from "./PokemonName";
import PokemonSprite from "./PokemonSprite";

type Stats = { stat: { name: string }; base_stat: string }[];

type Types = { type: { name: string } }[];

type Move = {
  move: {
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
  }[];
};

type PokemonData = {
  name: string;
  sprites: Record<string, string>;
  types: Types;
  stats: Stats;
  moves: Move[];
};

const LeftPanel = ({
  pData,
  no,
  description,
  index
}: {
  pData: PokemonData;
  no: number;
  description: number;
  index: number;
}) => {
  if (typeof pData === "object" && Object.keys(pData).length !== 0) {
    return (
      <div className="panel left-panel">
        <PokemonName name={pData.name} no={no} />
        <PokemonSprite src={pData.sprites} />
        <PokemonDescription description={description} index={index} pData={pData}/>
      </div>
    );
  } else {
    return Loading();
  }
};

export default LeftPanel;
