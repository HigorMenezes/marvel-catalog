import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Header1 = styled.h1`
  font-size: 6rem;
  color: ${props => props.theme.color.black};
  line-height: 1.7;
  margin-bottom: 1rem;
`;

export const Header2 = styled.h2`
  font-size: 4rem;
  color: ${props => props.theme.color.black};
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Header3 = styled.h3`
  font-size: 3rem;
  color: ${props => props.theme.color.black};
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 400;
`;
