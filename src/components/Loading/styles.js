import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: ${props => props.theme.color.red};
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
`;
