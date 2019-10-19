import styled from 'styled-components';

export const Container = styled.button`
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem;

  &:disabled {
    cursor: not-allowed;
  }
`;
