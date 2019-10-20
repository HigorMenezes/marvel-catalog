import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('medium')`
    width: 80%;
  `};

  ${media.greaterThan('large')`
    width: 70%;
  `};

  ${media.greaterThan('huge')`
    width: 60%;
  `};
`;
