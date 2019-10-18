import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;

  .card-characters-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    padding: 1rem;

    .character-card {
      width: 100%;
    }
  }

  .fetch-more-data-box {
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${media.greaterThan('medium')`
    .card-characters-list {
      .character-card {
        width: 50%;
      }
    }
  `};

  ${media.greaterThan('large')`
    .card-characters-list {
      .character-card {
        width: 25%;
      }
    }
  `};

  ${media.greaterThan('huge')`
    .card-characters-list {
      .character-card {
        width: 20%;
      }
    }
  `};
`;
