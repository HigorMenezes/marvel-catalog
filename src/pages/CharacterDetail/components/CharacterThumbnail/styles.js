import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.lightGrey};

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
