import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 6000;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 0.4rem;
  background-color: ${props => props.theme.color.white};

  .loader {
    width: 30%;
    height: 100%;
    background-color: ${props => props.theme.color.red};
    animation: loader 4s linear;
    animation-iteration-count: infinite;
  }

  @keyframes loader {
    0% {
      width: 0%;
      margin-left: 0%;
    }

    25% {
      width: 100%;
      margin-left: 0%;
    }

    50% {
      width: 100%;
      margin-left: 100%;
    }

    75% {
      width: 100%;
      margin-left: 0%;
    }

    100% {
      width: 0%;
      margin-left: 0%;
    }
  }
`;
