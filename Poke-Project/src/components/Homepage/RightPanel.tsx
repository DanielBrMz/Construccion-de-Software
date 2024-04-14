import ButtonChrome from "./ButtonChrome";
import Loading from "./Loading";
import MoveList from "./MoveList";
import PokedexControls from "./PokedexControls";
import PokemonEvolution from "./Pokemonevolution";
import PokemonStats from "./PokemonStats";
import PokemonType from "./PokemonType";

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

type Controls = {
  next: () => void;
  prev: () => void;
  pick: (id: number) => void;
};

type RightPanelProps = {
  pData: {
    types: Types;
    stats: Stats;
    moves: Move[];
  };
  evoSprites: string[];
  evoNames: string[];
  controls: Controls;
  no: number;
};

const RightPanel = ({ pData, evoSprites, evoNames, controls, no }: RightPanelProps) => {
  const {types, stats, moves } = pData;

  if (types) {
    return (
      <div className="panel right-panel">
        <div className="panel-row">
          <PokemonStats stats={stats} />
          <PokemonType types={types} />
        </div>

        <PokemonEvolution
          evoSprites={evoSprites}
          evoNames={evoNames}
        />
        <ButtonChrome />
        <MoveList moves={moves} />
        <PokedexControls controls={controls} no={no} />
      </div>
    );
  } else {
    return Loading();
  }
};

export default RightPanel;
