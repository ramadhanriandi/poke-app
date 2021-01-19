import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';

import { capitalizeFirstLetter } from '../../../../utils/string';

import { GET_POKEMON_QUERY } from './queries';
import { StyledPokemonCard } from './styles';

const PokemonCard = (props) => {
  const { isMine, pokemon, nickname } = props;

  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: { name: pokemon.name },
  });

  if (error) return `Error! ${error.message}`;

  return (
    <StyledPokemonCard>
      <div className="pokemon-card--left">
        <Link to={`/pokemons/${pokemon.name}`} className="pokemon-card__name">
          {capitalizeFirstLetter(pokemon.name)}
          {isMine && <span>( {nickname} )</span>}
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
          src={pokemon.image}
          alt="Avatar"
        />
        {isMine && <img className="pokemon-card__remove" src="./src/assets/img/close.svg" alt="" />}
      </div>
    </StyledPokemonCard>
  );
};

PokemonCard.propTypes = {
  isMine: PropTypes.bool,
  pokemon: PropTypes.object.isRequired,
  nickname: PropTypes.string,
};

PokemonCard.defaultProps = {
  isMine: false,
  nickname: '',
}

export default PokemonCard;