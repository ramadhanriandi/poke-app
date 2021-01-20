import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = (props) => {
  const { children, color, handleClick } = props;

  const getColorCode = () => {
    switch (color) {
      case "green":
        return "#4fc1a6";
      case "red":
        return "#fb6c6c";
      case "grey":
        return "#a1a2a6";
      default:
        return "#4fc1a6";
    }
  };

  return (
    <StyledButton color={getColorCode()} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: "green",
}

export default Button;