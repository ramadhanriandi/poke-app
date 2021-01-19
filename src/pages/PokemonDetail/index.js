import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavIcon from '../../assets/img/back.png';
import CatchIcon from '../../assets/img/catch.png';
import OverlayBackground from '../../components/common/OverlayBackground';
import PokemonFailCatchModal from '../../components/pages/PokemonDetail/PokemonFailCatchModal';
import PokemonSuccessCatchModal from '../../components/pages/PokemonDetail/PokemonSuccessCatchModal';

import { PokemonDetailWrapper } from './styles';

const PokemonDetail = (props) => {
  const { isMine } = props;

  const [errorMessage, setErrorMessage] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [nickname, setNickname] = useState("");

  const handleCatchPokemon = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleRetryCatch = () => {
    handleCatchPokemon();
  };

  const handleSave = () => {
    if (nickname.length) {
      if (nickname === "exist") {
        setErrorMessage("Sorry, the nickname already exists.");
      } else {
        console.log("submit ", nickname);
        setIsModal(false);
        setErrorMessage("");
        setNickname("");
      }
    } else {
      setErrorMessage("Sorry, the nickname is required.")
    }
  };
  
  return (
    <PokemonDetailWrapper>
      <div className="pokemon-detail--top">
        <Link className="pokemon-detail__nav" to="/">
          <img src={NavIcon} alt="Back" />
        </Link>
        <div className="pokemon-detail__name">Pikachu</div>
        <div className="pokemon-detail__avatar">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Avatar" />
        </div>
      </div>

      <div className="pokemon-detail--bottom">
        {isMine && (
          <div className="pokemon-detail__data">
            <div className="pokemon-detail__data__label">Nickname</div>
            <div className="pokemon-detail__data__value">Pika</div>
          </div>
        )}

        <div className="pokemon-detail__data--grouped">
          <div className="pokemon-detail__data">
            <div className="pokemon-detail__data__label">Height</div>
            <div className="pokemon-detail__data__value">0.70</div>
          </div>
          <div className="pokemon-detail__data">
            <div className="pokemon-detail__data__label">Weight</div>
            <div className="pokemon-detail__data__value">9.2</div>
          </div>
        </div>

        <div className="pokemon-detail__data">
          <div className="pokemon-detail__data__label">Types</div>
          <div className="pokemon-detail__data__types">
            <div className="pokemon-detail__data__type">Electric</div>
            <div className="pokemon-detail__data__type">Water</div>
            <div className="pokemon-detail__data__type">Water</div>
            <div className="pokemon-detail__data__type">Water</div>
            <div className="pokemon-detail__data__type">Water</div>
            <div className="pokemon-detail__data__type">Water</div>
            <div className="pokemon-detail__data__type">Water</div>
          </div>
        </div>

        <div className="pokemon-detail__data">
          <div className="pokemon-detail__data__label">Moves</div>
          <div className="pokemon-detail__data__moves">
            <div className="pokemon-detail__data__move">Razor Wind</div>
            <div className="pokemon-detail__data__move">Swords Dance</div>
          </div>
        </div>

        {!isMine && (
          <div aria-hidden="true" className="pokemon-detail__button" onClick={handleCatchPokemon}>
            <img src={CatchIcon} alt="Catch" />
          </div>
        )}
      </div>

      {isModal && (
        <OverlayBackground>
          {/* <PokemonSuccessCatchModal
            errorMessage={errorMessage}
            handleSave={handleSave}
            nickname={nickname}
            setNickname={setNickname}
          /> */}
          <PokemonFailCatchModal
            handleCancel={handleCloseModal}
            handleOk={handleRetryCatch}
          />
        </OverlayBackground>
      )}
    </PokemonDetailWrapper>
  );
};

PokemonDetail.propTypes = {
  isMine: PropTypes.bool,
};

PokemonDetail.defaultProps = {
  isMine: false,
};

export default PokemonDetail;