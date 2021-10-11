import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Pokedex pokemons={pokemons}/>
      </main>
    );
  }
}

export default App;
