import { type Pokemon } from "../../types/types";

const Pokemon = ({ pData, index }: { pData: Pokemon; index: number }) => {
  let sprite = "";
  let styles = {};

  if (index === 1) {
    sprite = pData.sprites.back_default;
    styles = { top: 600, left: 20 };
  } else {
    sprite = pData.sprites.front_default;
    styles = { top: 50, right: 30 };
  }

  return (
    <div style={{ position: 'absolute', width: "40vw", height: "40vh", zIndex: 1, ...styles }}>
      <img
        src={sprite}
        alt="pokemon"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Pokemon;
