import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 6000;

  width: 100%;
  height: 0.4rem;
  background-color: ${props => props.theme.color.white};

  .loader {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.red};
    animation: loader 5s;
  }

  @keyframes loader {
    0% {
      width: 0%;
    }
    10% {
      width: 20%;
    }
    20% {
      width: 25%;
    }
    30% {
      width: 60%;
    }
    40% {
      width: 90%;
    }

    90% {
      width: 95%;
    }

    100% {
      width: 98%;
    }
  }
`;
