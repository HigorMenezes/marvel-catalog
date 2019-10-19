import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 2rem;
`;

export const Header1 = styled.h1`
  font-size: 6rem;
  color: ${props => props.theme.color.black};
  line-height: 1.7;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem 2rem;
`;

export const Header2 = styled.h2`
  font-size: 4rem;
  color: ${props => props.theme.color.black};
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem 2rem;
`;

export const Header3 = styled.h3`
  font-size: 2.5rem;
  color: ${props => props.theme.color.black};
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  padding: 0.5rem 2rem;
`;

export const Header4 = styled.h4`
  font-size: 2rem;
  color: ${props => props.theme.color.black};
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  padding: 0.5rem 2rem;
`;

export const Paragraph1 = styled.p`
  padding: 2rem 0.5rem;
  text-align: center;
  word-wrap: break-word;
`;
