import { useContext } from "react"
import { NavigationContext } from "../../context/fightContext"

const FightButton = () => {
  const { fightingNow, setFightingNow } = useContext(NavigationContext);

  const onFightClick = () => {
    if(fightingNow) return;
    setFightingNow(true);
  };

  return (
    <button className="fight-button" onClick={onFightClick}>
      FIGHT!
    </button>
  )
}

export default FightButton
