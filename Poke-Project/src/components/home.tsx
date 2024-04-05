import { useEffect, useState } from "react";
import "./index.css";
import RightPanel from "./RightPanel";

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

type Move = {
  name: string;
  url: string;
};

type Moves = {
  move: Move;
  version_group_details: VersionGroupDetails[];
};

type PokemonData = { name: string; sprites: string[] };

type PokedexState = {
  requestRoot: string;
  pokemonIndex: number;
  pokemonData: PokemonData;
  pokemonDescription: string;
  speciesData: object;
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
    changePokemon();
    // eslint-disable-next-line
  }, []);

  const changePokemon = () => {
    setState({ ...state, loading: true });
    const request = `${state.requestRoot}${state.pokemonIndex}/`;
    fetch(request, {
      cache: "force-cache",
    })
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, pokemonData: data, pokemonIndex: data.id });
        const speciesRequest = data.species.url;
        return fetch(speciesRequest);
      })
      .then((response) => response.json())
      .then((data) => {
        const filteredEntries = data.flavor_text_entries
          .filter(
            (e: Record<string, Record<string, string>>) =>
              e.language.name === "en"
          )
          .map((e: Record<string, Record<string, string>>) => e.flavor_text);
        setState({
          ...state,
          speciesData: data,
          description: pickRandom(filteredEntries),
          loading: false,
        });
        const evo_chain = data.evolution_chain.url;
        fetch(evo_chain)
          .then((response) => response.json())
          .then((data) => {
            const api = "https://pokeapi.co/api/v2/pokemon/";
            const first = data.chain;
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
            Promise.all(evos)
              .then((responses) =>
                Promise.all(responses.map((value) => value.json()))
              )
              .then((dataList) => {
                const sprites = dataList.map((v) => v.sprites.front_default);
                const names = dataList.map((n) => n.name);
                setState({ ...state, evoSprites: sprites, evoNames: names });
              });
          });
      });
  };

  const pData = state.pokemonData;
  const sData = state.speciesData;

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
        sData={sData}
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

function PokemonDescription(props: { description: number }) {
  return <div className="pokemon-description screen">{props.description}</div>;
}

function Divider() {
  return (
    <div className="divider">
      <div className="gap" />
      <div className="hinge" />
      <div className="gap" />
      <div className="hinge" />
      <div className="gap" />
      <div className="hinge" />
      <div className="gap" />
    </div>
  );
}

export default Pokedex;
