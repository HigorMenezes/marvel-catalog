import styled from 'styled-components';

export const Container = styled.div`
  height: ${props => props.theme.navbar.height};
  background-color: ${props => props.theme.color.red};

  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    cursor: pointer;
  }
`;
