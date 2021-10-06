import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.type}</p>
      <p>{pokemon.averageWeight.value}</p>
      <img src={pokemon.image} alt='' />
    </div>
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Pokemon;
