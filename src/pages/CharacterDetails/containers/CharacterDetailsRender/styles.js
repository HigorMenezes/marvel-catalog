import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.5rem;

  .character-detail-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .thumbnail-preview {
      width: 100%;
    }

    .character-content {
      width: 100%;
      padding: 2rem;

      .character-series {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
      }
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
    .character-detail-container .thumbnail-preview {
      width: 65%;
    }
  `};

  ${media.greaterThan('large')`
    .character-detail-container .thumbnail-preview {
      width: 55%;
    }
  `};
`;
