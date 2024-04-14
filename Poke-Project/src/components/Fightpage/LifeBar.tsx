import { Pokemon } from "../../types/types";

const LifeBar = ({pData, index}: {pData: Pokemon, index: number}) => {
  let styles = {};

  if (index === 1) styles = { bottom: 150, left: 600 };
  else styles = { top: 150, right: 800 };

  return (
    <div className="retro-container" style={styles}>
      <span className="star-text">{pData.name}</span>
      <span className="level-text">Lv.100</span>
      <div className="progress-bar">
        <div className="progress-bar-fill"></div>
      </div>
    </div>
  );
};

export default LifeBar;
