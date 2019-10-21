import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form-controller {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .thumbnail-preview {
      width: 100%;
    }

    .save-button {
      align-self: flex-end;
      background-color: ${props => props.theme.color.success};
      color: ${props => props.theme.color.white};
      width: 100%;
      font-size: 2rem;
    }
  }

  ${media.greaterThan('medium')`
    .form-controller .thumbnail-preview {
      width: 55%;
    }
  `};
`;
