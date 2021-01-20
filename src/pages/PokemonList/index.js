/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { useQuery } from '@apollo/client';

import PokemonCard from '../../components/pages/PokemonList/PokemonCard';

import { TABS } from './constants';
import { GET_POKEMONS_QUERY, GET_POKEMONS_VARIABLES } from './queries';
import { PokemonListWrapper } from './styles';

const PokemonList = (props) => {
  const [offset, setOffset] = useState(GET_POKEMONS_VARIABLES.OFFSET);
  const [pokemons, setPokemons] = useState([]);
  const [tab, setTab] = useState(TABS.ALL);

  const { loading, error, data } = useQuery(GET_POKEMONS_QUERY, {
    variables: {
      limit: GET_POKEMONS_VARIABLES.LIMIT,
      offset,
    },
  });

  useEffect(() => {
    if (tab === TABS.ALL) {
      if (offset === 0) {
        setPokemons(_.get(data, 'pokemons.results', []));
      }
    } else {
      setOffset(0);

      const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));

      if (myPokemon && myPokemon.data.length) {
        setPokemons(myPokemon.data);
      }
    }
  }, [tab])

  useEffect(() => {
    if (tab === TABS.ALL) {
      setPokemons(
        _.concat(pokemons, _.get(data, 'pokemons.results', []))
      );
    }
  }, [data]);

  if (error) return `Error! ${error.message}`;

  const handleChangeTab = () => {
    if (tab === TABS.ALL) {
      setPokemons([]);
      setTab(TABS.MINE);
    } else {
      setTab(TABS.ALL);
    };
  };

  const handleClickMore = () => {
    setOffset(offset + GET_POKEMONS_VARIABLES.LIMIT);
  };

  const pokemonCount = tab === TABS.ALL ? _.get(data, 'pokemons.count', 0) : pokemons.length;

  return (
    <PokemonListWrapper>
      <div className="pokemon-list__header">
        <img src="./src/assets/img/logo.jpg" alt="" />
        <h1>Pokepedia</h1>
      </div>

      <div className="pokemon-list__tabs">
        <div
          aria-hidden="true"
          className={`pokemon-list__tab ${tab === TABS.ALL ? 'active' : ''}`}
          onClick={tab === TABS.MINE ? handleChangeTab : undefined}
        >
          All Pokemon
        </div>
        <div
          aria-hidden="true"
          className={`pokemon-list__tab ${tab === TABS.MINE ? 'active' : ''}`}
          onClick={tab === TABS.ALL ? handleChangeTab : undefined}
        >
          My Pokemon
        </div>
      </div>

      <div className="pokemon-list__count">
        <span>{pokemonCount}</span>
        &nbsp; Pokemon{pokemonCount > 1 ? 's' : ''} found
      </div>
      
      <div className="pokemon-list__content">
        {tab === TABS.ALL && loading && offset === GET_POKEMONS_VARIABLES.OFFSET
          ? 'Loading ...' 
          : _.map(pokemons, (pokemon, index) => (
            <PokemonCard
              isMine={tab === TABS.MINE}
              key={`pokemon-list__content-${index}`}
              pokemon={pokemon}
              setPokemons={setPokemons}
            />
          ))
        }
        {tab === TABS.ALL && _.get(data, 'pokemons.next') && (
          <div
            aria-hidden="true"
            className="pokemon-list__more"
            onClick={handleClickMore}
          >
            {loading && offset !== GET_POKEMONS_VARIABLES.OFFSET
              ? 'Loading ...'
              : 'More Pokemons'
            }
          </div>
        )}
      </div>
    </PokemonListWrapper>
  );
};

export default PokemonList;