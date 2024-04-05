const PokemonName = (props: { name: string; no: number }) => {
  return (
    <div className="pokemon-name screen">
      {props.name}
      <span className="name-no">no. {props.no}</span>
    </div>
  );
};

export default PokemonName;