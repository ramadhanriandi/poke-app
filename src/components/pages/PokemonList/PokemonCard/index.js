import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledPokemonCard } from './styles';

const PokemonCard = (props) => {
  const { isMine } = props;

  return (
    <StyledPokemonCard>
      <div className="pokemon-card--left">
        <Link to="/pokemons/1" className="pokemon-card__name">
          Bulbasaur
          {!isMine && <span>( Bulba )</span>}
        </Link>
        <div className="pokemon-card__types">
          <div className="pokemon-card__type">Grass</div>
          <div className="pokemon-card__type">Poison</div>
        </div>
      </div>
      
      <div className="pokemon-card--right">
        <img
          className="pokemon-card__avatar"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Avatar"
        />
        {isMine && <img className="pokemon-card__remove" src="./src/assets/img/close.svg" alt="" />}
      </div>
    </StyledPokemonCard>
  );
};

PokemonCard.propTypes = {
  isMine: PropTypes.bool,
};

PokemonCard.defaultProps = {
  isMine: false,
}

export default PokemonCard;