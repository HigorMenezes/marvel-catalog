import { gql } from 'apollo-boost';

export const GET_ALL_CHARACTERS = gql`
  query Characters($offset: Int!, $limit: Int!, $where: CharacterWhereInput) {
    characters(offset: $offset, limit: $limit, where: $where) {
      id
      thumbnail
      name
    }
  }
`;
