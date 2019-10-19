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

    .series-thumbnail-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.color.white};
      padding: 1rem;
      box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem rgba(0, 0, 0, 0.06),
        0.1rem 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.2);

      .series-thumbnail {
        width: 100%;
        height: 100%;
      }
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
    .series-thumbnail-container {
      width: 75%;
    }
  `};
`;
