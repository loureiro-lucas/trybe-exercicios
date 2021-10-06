import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  
  render() {
      const { pokemons } = this.props;
    return <div>
      <h1>Minha Pokedex</h1>
      {pokemons.map((item, index) => <Pokemon key={index} pokemon={item} />)};
    </div>
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
}

export default Pokedex;
