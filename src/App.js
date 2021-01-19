import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route exact path="/pokemons">
            <PokemonList />
          </Route>
          <Route exact path="/pokemons/:id">
            <PokemonDetail />
          </Route>
          <Route exact path="/pokemons/my/:nickname">
            <PokemonDetail isMine />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
