import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.white};
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem rgba(0, 0, 0, 0.06),
    0.1rem 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.2);

  .thumbnail {
    width: 100%;
  }

  ${media.greaterThan('medium')`
    width: 85%;
  `};

  ${media.greaterThan('large')`
    width: 75%;
  `};
`;
