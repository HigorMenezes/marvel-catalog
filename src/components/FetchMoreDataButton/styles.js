import styled from 'styled-components';

export const Container = styled.button`
  height: 4rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 4rem;
  cursor: pointer;

  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 2rem;
  font-weight: 400;

  background-color: transparent;
  color: ${props => props.theme.color.black};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.color.lightGrey};
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: ${props => props.theme.color.black};
  }
`;
