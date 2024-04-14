import { padStats } from "../../utils/padStats";

type MoveEntryProps = {
  move: {
    name: string;
    names: { language: { name: string }; name: string }[];
    accuracy: string;
    power: string;
    pp: string;
    type: { name: string };
  };
  lvl: number;
};

const MoveEntry = ({ move, lvl }: MoveEntryProps) => {
  const name =
    move.name ||
    move.names.filter(
      (m) => m.language.name === "en"
    )[0].name;
  const acc = move.accuracy;
  const pow = move.power;
  const pp = move.pp;
  const type = move.type.name;
  return (
    <div className="move-body move-screen screen">
      <div className="move-left">
        <div className="move-name">{name}</div>
        <div className="move-stat">{padStats("Accuracy", acc, ".", 16)}</div>
        <div className="move-stat">{padStats("Power", pow, ".", 16)}</div>
        <div className="move-stat">{padStats("PP", pp, ".", 16)}</div>
      </div>
      <div className="move-right">
        <div className="move-type">Type: {type}</div>
        <div className="move-learn">Learn: Lvl {lvl}</div>
      </div>
    </div>
  );
};

export default MoveEntry;