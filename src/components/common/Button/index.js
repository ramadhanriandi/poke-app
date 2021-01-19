import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = (props) => {
  const { children, handleClick } = props;

  return (
    <StyledButton onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;