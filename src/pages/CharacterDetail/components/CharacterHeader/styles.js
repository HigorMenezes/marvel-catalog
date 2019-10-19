import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14rem;
  width: 100%;
  padding: 0.5rem;

  z-index: 1;
  box-shadow: 0.2rem 0.2rem 2rem 0.7rem rgba(0, 0, 0, 0.1),
    0rem 0.4rem 1rem 0.4rem rgba(0, 0, 0, 0.15),
    -0.1rem -0.1rem 1rem 0.4rem rgba(0, 0, 0, 0.1);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  .header {
    font-size: 4.4rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: 700;
    text-align: center;
    padding: 2rem 1rem;
    line-height: 1.2;
  }
`;
