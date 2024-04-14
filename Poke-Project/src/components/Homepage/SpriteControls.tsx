type SpriteControlsProps = {
  gender: boolean;
  shiny: boolean;
  front: boolean;
  funcs: { gender: () => void; shiny: () => void; front: () => void };
};

const SpriteControls = ({
  gender,
  shiny,
  front,
  funcs,
}: SpriteControlsProps) => {
  return (
    <div className="sprite-controls">
      <div
        className={
          "sprite-control sprite-controls-gender " +
          (gender ? "sprite-control-selected" : "")
        }
        onClick={funcs.gender}
      >
        <i className="fas fa-venus" />
      </div>
      <div
        className={
          "sprite-control sprite-controls-shiny " +
          (shiny ? "sprite-control-selected" : "")
        }
        onClick={funcs.shiny}
      >
        <span>shiny</span>
      </div>
      <div
        className={
          "sprite-control sprite-controls-rotate " +
          (!front ? "sprite-control-selected" : "")
        }
        onClick={funcs.front}
      >
        <i className="fas fa-undo" />
      </div>
    </div>
  );
};

export default SpriteControls;
