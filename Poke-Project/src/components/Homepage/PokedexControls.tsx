import Button from "./Button";
import NumInput from "./NumInput";

type PokedexControlsProps = {
  no: number;
  controls: {
    next: () => void;
    prev: () => void;
    pick: (id: number) => void;
  };
}

const PokedexControls = ({no, controls}: PokedexControlsProps) => {
  return (
    <div className="panel-row controls">
      <Button onClick={controls.prev} />
      <NumInput no={no} func={controls.pick} />
      <Button onClick={controls.next} />
    </div>
  );
}

export default PokedexControls;