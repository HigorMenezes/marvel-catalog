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

    .character-header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 8rem;
      width: 100%;
      padding: 0.5rem;

      z-index: 1;
      box-shadow: 0.2rem 0.2rem 2rem 0.7rem rgba(0, 0, 0, 0.1),
        0rem 0.4rem 1rem 0.4rem rgba(0, 0, 0, 0.15),
        -0.1rem -0.1rem 1rem 0.4rem rgba(0, 0, 0, 0.1);
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;

      .header {
        font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: 1.1;
        text-align: center;
      }
    }

    .character-thumbnail {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.color.lightGrey};

      .thumbnail {
        width: 100%;
        min-height: 5rem;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        transition: height 0.2s;
      }
    }

    .character-content {
      width: 100%;
      padding: 2rem;

      z-index: 1;
      box-shadow: -0.2rem -0.2rem 1rem 0.4rem rgba(0, 0, 0, 0.1),
        0rem -0.4rem 1rem 0.4rem rgba(0, 0, 0, 0.15),
        0.1rem 0.1rem 1rem 0.4rem rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;

      .character-description {
        .description {
          padding: 2rem 0.5rem;
          text-align: center;
          word-wrap: break-word;
        }
      }
    }
  }

  .character-series {
    .series-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 2rem 0.5rem;

      .series-thumbnail-container {
        width: 100%;
        .series-thumbnail {
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }

      .series-content {
        width: 100%;
        .title {
          text-align: center;
        }
        .description {
          text-align: center;
        }
      }
    }
  }

  ${media.greaterThan('medium')`
    .character-thumbnail .thumbnail {
        height: 50rem !important;
    }
  `};

  ${media.greaterThan('large')`
    .character-thumbnail .thumbnail {
        height: 70rem !important;
    }
  `};

  ${media.greaterThan('huge')`
    .character-thumbnail {
        height: 70rem !important;
    }
  `};
`;
