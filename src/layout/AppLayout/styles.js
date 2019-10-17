import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .navbar {
    position: fixed;
    width: 100%;
    z-index: 5000;
  }

  .content {
    padding: 0.5rem;
    padding-top: ${props => props.theme.navbar.height};
  }
`;
