import Loading from "./Loading";
import PokemonDescription from "./PokemonDescription";
import PokemonName from "./PokemonName";
import PokemonSprite from "./PokemonSprite";

type PokemonData = { name: string; sprites: Record<string, string> };

const LeftPanel = ({
  pData,
  no,
  description,
}: {
  pData: PokemonData;
  no: number;
  description: number;
}) => {
  
  if (typeof pData === "object" && Object.keys(pData).length !== 0) {
    return (
      <div className="panel left-panel">
        <PokemonName name={pData.name} no={no} />
        <PokemonSprite src={pData.sprites} />
        <PokemonDescription description={description}/>
      </div>
    );
  } else {
    return Loading();
  }
};

export default LeftPanel;