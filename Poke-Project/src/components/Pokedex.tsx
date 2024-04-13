import { useEffect, useState } from "react";
import "../index.css";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
import Divider from "./Divider";

type MoveLearnMethod = {
  name: string;
  url: string;
};

type VersionGroup = {
  name: string;
  url: string;
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
};

type Moves = {
  move: Move;
  version_group_details: VersionGroupDetails[];
};

type Stats = { stat: { name: string }; base_stat: string }[];

type Types = { type: { name: string } }[];

type Move = {
  move: {
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
  }[];
};

type PokemonData = {
  name: string;
  sprites: Record<string, string>;
  types: Types;
  stats: Stats;
  moves: Move[];
};

type PokedexState = {
  requestRoot: string;
  pokemonIndex: number;
  pokemonData: PokemonData;
  pokemonDescription: string;
  speciesData: Record<string, string>;
  evoSprites: string[];
  evoNames: string[];
  moves: Moves[];
  loading: boolean;
  description: number;
};

export const POKEMON = 1;

const pickRandom = (arr: number[]): number => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Pokedex = () => {
  const [state, setState] = useState<PokedexState>({
    requestRoot: "https://pokeapi.co/api/v2/pokemon/",
    pokemonIndex: POKEMON,
    pokemonData: {} as PokemonData,
    pokemonDescription: "",
    speciesData: {},
    evoSprites: [],
    evoNames: [],
    moves: [],
    loading: false,
    description: 0,
  });

  const nextPokemon = () => {
    const next = Math.min(state.pokemonIndex + 1, 949);
    setState({ ...state, pokemonIndex: next });
  };

  const previousPokemon = () => {
    const prev = Math.max(state.pokemonIndex - 1, 1);
    setState({ ...state, pokemonIndex: prev });
  };

  const pickPokemon = (no: number) => {
    setState({ ...state, pokemonIndex: no });
  };

  useEffect(() => {
    const changePokemon = async () => {
      setState({ ...state, loading: true });
      const request = `${state.requestRoot}${state.pokemonIndex}/`;
  
      const pokemonDataResponse = await fetch(request, {
        cache: "force-cache",
      });
      const pokemonData = await pokemonDataResponse.json();
  
      const speciesRequest = pokemonData.species.url;
      const speciesResponse = await fetch(speciesRequest);
      const speciesData = await speciesResponse.json();
  
      const filteredEntries = speciesData.flavor_text_entries
        .filter(
          (e: Record<string, Record<string, string>>) =>
            e.language.name === "en"
        )
        .map((e: Record<string, Record<string, string>>) => e.flavor_text);
  
      const evo_chain = speciesData.evolution_chain.url;
      const evoResponse = await fetch(evo_chain);
      const evoData = await evoResponse.json();
  
      const api = "https://pokeapi.co/api/v2/pokemon/";
      const first = evoData.chain;
      let second;
      let third;
      const evos = [];
      if (first) {
        const e1 = fetch(`${api}${first.species.name}/`);
        evos.push(e1);
        second = first.evolves_to[0];
      }
      if (second) {
        const e2 = fetch(`${api}${second.species.name}/`);
        third = second.evolves_to[0];
  
        evos.push(e2);
      }
      if (third) {
        const e3 = fetch(`${api}${third.species.name}/`);
        evos.push(e3);
      }
  
      const evoResponses = await Promise.all(evos);
      const dataList = await Promise.all(evoResponses.map((value) => value.json()));
      const sprites = dataList.map((v) => v.sprites.front_default);
      const names = dataList.map((n) => n.name);
  
      setState({
        ...state,
        pokemonData: pokemonData,
        pokemonIndex: pokemonData.id,
        speciesData: speciesData,
        description: pickRandom(filteredEntries),
        loading: false,
        evoSprites: sprites,
        evoNames: names,
      });
    };
    changePokemon();
    // eslint-disable-next-line
  }, [state.pokemonIndex]);
  

  const pData = state.pokemonData;
  //const sData = state.speciesData;

  return (
    <div className="pokedex">
      <LeftPanel
        pData={pData}
        no={state.pokemonIndex}
        description={state.description}
      />
      <Divider />
      <RightPanel
        pData={pData}
        evoSprites={state.evoSprites}
        evoNames={state.evoNames}
        controls={{
          next: nextPokemon,
          prev: previousPokemon,
          pick: pickPokemon,
        }}
        no={state.pokemonIndex}
      />
      {/* <TypeList /> */}
    </div>
  );
};

export default Pokedex;
