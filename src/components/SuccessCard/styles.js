import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  margin: 1rem 0rem;
  background-color: ${props => rgba(props.theme.color.success, 0.2)};

  border: 0.2rem solid ${props => props.theme.color.success};
  color: ${props => props.theme.color.black};
  font-size: 1.6rem;
  font-weight: 400;
`;
