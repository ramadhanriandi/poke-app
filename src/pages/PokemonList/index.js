import React, { useState } from 'react';
import _ from 'lodash';

import PokemonCard from '../../components/pages/PokemonList/PokemonCard';

import { TABS } from './constants';
import { PokemonListWrapper } from './styles';

const PokemonList = (props) => {
  const [tab, setTab] = useState(TABS.ALL);

  const handleChangeTab = () => {
    if (tab === TABS.ALL) setTab(TABS.MINE);
    else setTab(TABS.ALL);
  };

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
          onClick={tab === TABS.MINE && handleChangeTab}
        >
          All Pokemon
        </div>
        <div
          aria-hidden="true"
          className={`pokemon-list__tab ${tab === TABS.MINE ? 'active' : ''}`}
          onClick={tab === TABS.ALL && handleChangeTab}
        >
          My Pokemon
        </div>
      </div>

      <div className="pokemon-list__count">
        <span>1118</span> &nbsp; Pokemons found
      </div>
      
      <div className="pokemon-list__content">
        {_.times(5, () => (<PokemonCard isMine={tab === TABS.MINE} />))}
        <div className="pokemon-list__more">More Pokemons</div>
      </div>
    </PokemonListWrapper>
  );
};

export default PokemonList;