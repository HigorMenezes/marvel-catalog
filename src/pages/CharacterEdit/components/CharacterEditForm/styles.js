import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .thumbnail-preview {
      width: 100%;
    }
  }

  ${media.greaterThan('medium')`
    .form .thumbnail-preview {
      width: 75%;
    }
  `};
`;
