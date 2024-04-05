import React, { useState, useEffect } from "react";
import MovesLoading from "./MovesLoading";
import MoveEntry from "./MoveEntry";

type Move = {
  move: {
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
  }[];
};

type MoveListProps = {
  moves: Move[];
};

type CurrentMoveType = {
  name: string;
  names: { language: { name: string }; name: string }[];
  accuracy: string;
  power: string;
  pp: string;
  type: { name: string };
};

const MoveList: React.FC<MoveListProps> = ({ moves }) => {
  const [index, setIndex] = useState(0);
  const [currentMove, setCurrentMove] = useState<CurrentMoveType>(
    {} as CurrentMoveType
  );
  const [loading, setLoading] = useState(false);

  const loadMoves = () => {
    setLoading(true);
    fetch(moves[index].move.url)
      .then((response) => response.json())
      .then((data) => {
        setCurrentMove(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoves();
    // eslint-disable-next-line
  }, [index, moves]);

  const nextMove = () => {
    const nextIndex = Math.min(index + 1, moves.length - 1);
    setIndex(nextIndex);
  };

  const prevMove = () => {
    const nextIndex = Math.max(index - 1, 0);
    setIndex(nextIndex);
  };

  let movesComponent;
  if (loading || Object.keys(currentMove).length === 0) {
    movesComponent = <MovesLoading />;
  } else {
    const lvl = moves[index].version_group_details[0].level_learned_at;
    const move: CurrentMoveType = {
      name: currentMove.name,
      names: currentMove.names,
      accuracy: currentMove.accuracy,
      power: currentMove.power,
      pp: currentMove.pp,
      type: currentMove.type,
    };
    movesComponent = <MoveEntry move={move} lvl={lvl} />;
  }

  return (
    <div className="move-list">
      {movesComponent}
      <div className="move-controls">
        <div className="move-arrow" onClick={prevMove}>
          <i className="fas fa-caret-up" />
        </div>
        <div className="move-arrow" onClick={nextMove}>
          <i className="fas fa-caret-down" />
        </div>
      </div>
    </div>
  );
};

export default MoveList;
