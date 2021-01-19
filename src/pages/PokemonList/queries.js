import { gql } from '@apollo/client';

export const GET_POKEMONS_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMONS_VARIABLES = {
  LIMIT: 10,
  OFFSET: 0,
};