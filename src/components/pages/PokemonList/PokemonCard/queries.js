import { gql } from '@apollo/client';

export const GET_POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types {
        type {
          name
        }
      }
    }
  }
`;
