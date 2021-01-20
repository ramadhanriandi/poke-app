import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from '@emotion/react'

import NavIcon from '../../assets/img/back.png';
import CatchIcon from '../../assets/img/catch.png';
import OverlayBackground from '../../components/common/OverlayBackground';
import PokemonFailCatchModal from '../../components/pages/PokemonDetail/PokemonFailCatchModal';
import PokemonSuccessCatchModal from '../../components/pages/PokemonDetail/PokemonSuccessCatchModal';
import { capitalizeFirstLetter } from '../../utils/string';

import { MODAL_OPTIONS } from './constants';
import { GET_POKEMON_QUERY } from './queries';
import { bounce, PokemonDetailWrapper } from './styles';

const PokemonDetail = (props) => {
  const { isMine } = props;

  const { name, nickname: nicknameParam } = useParams();

  const [errorMessage, setErrorMessage] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [modalState, setModalState] = useState(-1);
  const [nickname, setNickname] = useState(nicknameParam || "");

  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: { name },
  });

  if (error) return `Error! ${error.message}`;

  const handleChooseModal = () => {
    return Math.floor(Math.random() * Math.floor(_.size(MODAL_OPTIONS)));
  };

  const handleCatchPokemon = () => {
    setModalState(handleChooseModal());
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setModalState(-1);
  };

  const handleRetryCatch = () => {
    handleCatchPokemon();
  };

  const handleSave = () => {
    if (nickname.length) {
      let myPokemon = localStorage.getItem("myPokemon")
        ? JSON.parse(localStorage.getItem("myPokemon"))
        : { data: [] };

      let isExist = false;

      if (myPokemon && myPokemon.data.length) {
        for (let i = 0; i < myPokemon.data.length; i++) {
          if (myPokemon.data[i].nickname === nickname) {
            isExist = true;
            break;
          }
        }
      }
      
      if (isExist) {
        setErrorMessage("Sorry, the nickname already exists.");
      } else {
        myPokemon = {
          data: [...myPokemon.data, { name, nickname }]
        };
        localStorage.setItem("myPokemon", JSON.stringify(myPokemon));

        handleCloseModal();
        setErrorMessage("");
        setNickname("");
      }
    } else {
      setErrorMessage("Sorry, the nickname is required.")
    }
  };

  const renderModal = () => {
    if (modalState === MODAL_OPTIONS.SUCCESS) {
      return (
        <PokemonSuccessCatchModal
          errorMessage={errorMessage}
          handleSave={handleSave}
          nickname={nickname}
          setNickname={setNickname}
        />
      );
    }
    return (
      <PokemonFailCatchModal
        handleCancel={handleCloseModal}
        handleOk={handleRetryCatch}
      />
    );
  };
  
  return (
    <PokemonDetailWrapper>
      <div className="pokemon-detail--top">
        <Link className="pokemon-detail__nav" to="/">
          <img src={NavIcon} alt="Back" />
        </Link>
        <div className="pokemon-detail__name">{capitalizeFirstLetter(name)}</div>
        <div className="pokemon-detail__avatar">
          <img
            src={_.get(data, 'pokemon.sprites.front_default', '')}
            alt="Avatar"
          />
        </div>
      </div>

      <div className="pokemon-detail--bottom">
        {loading
          ? 'Loading ...'
          : (
            <div className="pokemon-detail--bottom__content">
              {isMine && (
                <div className="pokemon-detail__data">
                  <div className="pokemon-detail__data__label">Nickname</div>
                  <div className="pokemon-detail__data__value">{nickname}</div>
                </div>
              )}

              <div className="pokemon-detail__data--grouped">
                <div className="pokemon-detail__data">
                  <div className="pokemon-detail__data__label">Height</div>
                  <div className="pokemon-detail__data__value">
                    {_.get(data, 'pokemon.height', 0)}
                  </div>
                </div>
                <div className="pokemon-detail__data">
                  <div className="pokemon-detail__data__label">Weight</div>
                  <div className="pokemon-detail__data__value">
                    {_.get(data, 'pokemon.weight', 0)}
                  </div>
                </div>
              </div>

              <div className="pokemon-detail__data">
                <div className="pokemon-detail__data__label">Types</div>
                <div className="pokemon-detail__data__types">
                  {
                    _.map(_.get(data, 'pokemon.types', []), (types, index) => (
                      <div
                        className="pokemon-detail__data__type"
                        key={`pokemon-detail__data__types-${index}`}
                      >
                        {capitalizeFirstLetter(types.type.name)}
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="pokemon-detail__data">
                <div className="pokemon-detail__data__label">Moves</div>
                <div className="pokemon-detail__data__moves">
                  {
                    _.map(_.get(data, 'pokemon.moves', []), (moves, index) => (
                      <div
                        className="pokemon-detail__data__move"
                        key={`pokemon-detail__data__moves-${index}`}
                      >
                        {capitalizeFirstLetter(moves.move.name)}
                      </div>
                    ))
                  }
                </div>
              </div>

              {!loading && !isMine && (
                <div
                  aria-hidden="true"
                  className="pokemon-detail__button"
                  css={css`
                    animation: ${bounce} 1s ease infinite;
                  `}
                  onClick={handleCatchPokemon}
                >
                  <img src={CatchIcon} alt="Catch" />
                </div>
              )}
            </div>
          )}
      </div>

      {isModal && (
        <OverlayBackground>{renderModal()}</OverlayBackground>
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