import { gql } from 'apollo-boost';

export const GET_ALL_CHARACTERS_BY_START_NAME = gql`
  query characters($offset: Int!, $limit: Int!, $where: CharacterWhereInput!) {
    characters(offset: $offset, limit: $limit, where: $where) {
      id
      thumbnail
      name
    }
  }
`;
