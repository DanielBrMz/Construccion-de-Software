import ShowType from "./ShowType";

const PokemonType = ({ types }: { types: { type: { name: string } }[] }) => {
  return (
    <div className="type-list">
      <div className="panel-header">Types</div>
      <div className="type-box">
        {types.map((t) => {
          const type = t.type.name;
          return <ShowType type={type} key={type} />;
        })}
      </div>
    </div>
  );
};

export default PokemonType;
