import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';

import CloseIcon from '../../../../assets/img/close.svg';
import { capitalizeFirstLetter } from '../../../../utils/string';

import { GET_POKEMON_QUERY } from './queries';
import { StyledPokemonCard } from './styles';

const PokemonCard = (props) => {
  const { isMine, pokemon, setPokemons } = props;

  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: { name: pokemon.name },
  });

  if (error) return `Error! ${error.message}`;

  const handleRemovePokemon = () => {
    if (isMine) {
      const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
      let newMyPokemon = { data: [] };

      for (let i = 0; i < myPokemon.data.length; i++) {
        if (myPokemon.data[i].nickname !== pokemon.nickname) {
          newMyPokemon.data.push(myPokemon.data[i])
        }
      }

      setPokemons(newMyPokemon.data);

      localStorage.setItem("myPokemon", JSON.stringify(newMyPokemon));
    }
  };

  return (
    <StyledPokemonCard>
      <div className="pokemon-card--left">
        <Link
          className="pokemon-card__name"
          to={isMine ? `/pokemons/my/${pokemon.name}/${pokemon.nickname}` : `/pokemons/${pokemon.name}`}
        >
          {capitalizeFirstLetter(pokemon.name)}
          {isMine && <span>( {pokemon.nickname} )</span>}
        </Link>
        <div className="pokemon-card__types">
          {loading 
            ? 'Loading ...' 
            : _.map(_.get(data, 'pokemon.types', []), (types, index) => (
              <div
                className="pokemon-card__type"
                key={`pokemon-card__types-${index}`}
              >
                {capitalizeFirstLetter(types.type.name)}
              </div>
            ))
          }
        </div>
      </div>
      
      <div className="pokemon-card--right">
        <img
          className="pokemon-card__avatar"
          src={isMine ? _.get(data, 'pokemon.sprites.front_default', '') : pokemon.image}
          alt={"Avatar"}
        />
        {isMine && (
          <img
            aria-hidden="true"
            className="pokemon-card__remove"
            src={CloseIcon}
            onClick={handleRemovePokemon}
            alt="X"
          />
        )}
      </div>
    </StyledPokemonCard>
  );
};

PokemonCard.propTypes = {
  isMine: PropTypes.bool,
  pokemon: PropTypes.object.isRequired,
  setPokemons: PropTypes.func.isRequired,
};

PokemonCard.defaultProps = {
  isMine: false,
}

export default PokemonCard;