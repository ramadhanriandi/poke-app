import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

import './App.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PokemonList />
            </Route>
            <Route exact path="/pokemons">
              <PokemonList />
            </Route>
            <Route exact path="/pokemons/:name">
              <PokemonDetail />
            </Route>
            <Route exact path="/pokemons/my/:nickname">
              <PokemonDetail isMine />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
