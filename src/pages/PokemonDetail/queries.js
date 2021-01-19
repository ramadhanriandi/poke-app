import { gql } from '@apollo/client';

export const GET_POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      height
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      weight
    }
  }
`;
