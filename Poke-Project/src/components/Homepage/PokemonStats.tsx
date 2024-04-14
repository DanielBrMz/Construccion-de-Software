import StatLine from "./StatLine";

type PokemonStatsProps = {
  stats: { stat: { name: string }; base_stat: string }[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="screen stats">
      {stats.map((s) => {
        const name = s.stat.name;
        const value = s.base_stat;

        return <StatLine name={name} value={value} key={name} />;
      })}
    </div>
  );
};

export default PokemonStats;
