import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Modal from '../../../common/Modal';

const PokemonFailCatchModal = (props) => {
  const { handleCancel, handleOk } = props;

  return (
    <Modal>
      <div className="modal__title">
        Sorry, you miss it.
        <br />
        <span>Try again?</span>
      </div>
      <div className="modal__button--grouped">
        <Button handleClick={handleOk}>Yes</Button>
        <Button handleClick={handleCancel} color="red">Cancel</Button>
      </div>
    </Modal>
  );
};

PokemonFailCatchModal.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
};

export default PokemonFailCatchModal;