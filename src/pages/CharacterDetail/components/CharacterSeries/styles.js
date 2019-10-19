import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .series-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .series-thumbnail {
      width: 100%;
    }

    .series-description-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: 2rem 1rem;
    }
  }

  ${media.greaterThan('medium')`
    .series-content .series-thumbnail {
      width: 75%;
    }
  `};
`;
