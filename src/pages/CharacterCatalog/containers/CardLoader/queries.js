import { gql } from 'apollo-boost';

export const GET_ALL_CHARACTERS = gql`
  query Characters($offset: Int!, $limit: Int!) {
    characters(offset: $offset, limit: $limit) {
      id
      thumbnail
      name
    }
  }
`;
