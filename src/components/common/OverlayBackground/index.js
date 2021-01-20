import React from 'react';
import PropTypes from 'prop-types';

import { StyledOverlayBackground } from './styles';

const OverlayBackground = (props) => {
  const { children } = props;

  return (
    <StyledOverlayBackground>
      {children}
    </StyledOverlayBackground>
  );
};

OverlayBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OverlayBackground;