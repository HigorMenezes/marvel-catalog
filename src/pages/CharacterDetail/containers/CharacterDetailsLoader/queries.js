import { gql } from 'apollo-boost';

export const GET_CHARACTER_BY_ID = gql`
  query Characters($where: CharacterWhereInput!) {
    characters(where: $where) {
      id
      name
      thumbnail
      description
    }
  }
`;
