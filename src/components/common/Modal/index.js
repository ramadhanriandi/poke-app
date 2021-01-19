import React from 'react';
import PropTypes from 'prop-types';

import { StyledModal } from './styles';

const Modal = (props) => {
  const { children } = props;

  return (
    <StyledModal>{children}</StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;