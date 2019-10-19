import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.button`
  position: relative;
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
  margin: 1rem 0rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  &:hover::after {
    background-color: ${props => rgba(props.theme.color.white, 0.1)};
  }

  &:disabled {
    cursor: not-allowed;

    &::after {
      background-color: ${props => rgba(props.theme.color.black, 0.2)};
    }
  }
`;
