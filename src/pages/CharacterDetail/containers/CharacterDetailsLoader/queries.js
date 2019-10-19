import { gql } from 'apollo-boost';

export const GET_CHARACTER_BY_ID = gql`
  query characters($where: CharacterWhereInput!) {
    characters(where: $where) {
      id
      name
      thumbnail
      description
    }
  }
`;

export const GET_SERIES_BY_CHARACTER_ID = gql`
  query series($offset: Int!, $limit: Int!, $where: SeriesWhereInput!) {
    series(offset: $offset, limit: $limit, where: $where) {
      id
      title
      thumbnail
      description
    }
  }
`;
