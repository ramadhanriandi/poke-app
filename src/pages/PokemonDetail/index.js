import React from 'react';
import PropTypes from 'prop-types';


const PokemonDetail = (props) => {
  const { url } = props;
  
  return (
      <div>PokemonDetail - {url}</div>
  );
};

PokemonDetail.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonDetail;