import "./App.css";
import "./index.css";
import Pokedex from "./components/Homepage/Pokedex";
import FightButton from "./components/Homepage/FightButton";
import { NavigationContext } from "./context/fightContext";
import { useContext } from "react";
import Background from "./components/Fightpage/Background";
import Pokemon from "./components/Fightpage/Pokemon";
import LifeBar from "./components/Fightpage/LifeBar";

function App() {
  const { firstPokemon, secondPokemon, fightingNow } =
    useContext(NavigationContext);

    console.log("from app", firstPokemon, secondPokemon);

  return (
    <>
      {fightingNow ? (
        <>
          <Background />
          <Pokemon pData={firstPokemon!} index={1} />
          <Pokemon pData={secondPokemon!} index={2} /> 
          <LifeBar pData={firstPokemon} index={1}/>
          <LifeBar pData={secondPokemon} index={2}/>
        </>
      ) : (
        <div className="main-container">
          <div className="pokedex-container">
            <Pokedex index={1} />
            <Pokedex index={2} />
          </div>
          <FightButton />
        </div>
      )}
    </>
  );
}

export default App;
