const PokemonName = ({name, no}: { name: string; no: number }) => {
  return (
    <div className="pokemon-name screen">
      {name}
      <span className="name-no">no. {no}</span>
    </div>
  );
};

export default PokemonName;