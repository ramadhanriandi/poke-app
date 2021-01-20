import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Modal from '../../../common/Modal';

const PokemonSuccessCatchModal = (props) => {
  const { errorMessage, handleSave, nickname, setNickname } = props;

  const handleChangeInput = (e) => {
    setNickname(e.target.value);
  };

  return (
    <Modal>
      <div className="modal__title">
        <span>Congratulation</span>,
        <br />
        you catch it!.
      </div>
      <input
        className="modal__input"
        type="text"
        value={nickname}
        onChange={handleChangeInput}
      />
      <div className="modal__error">
        {errorMessage}
      </div>
      <div className="modal__button">
        <Button handleClick={handleSave}>Save</Button>
      </div>
    </Modal>
  );
};

PokemonSuccessCatchModal.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  setNickname: PropTypes.func.isRequired,
};

export default PokemonSuccessCatchModal;