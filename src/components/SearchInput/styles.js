import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .input-container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 2.5rem;
    padding: 0.5rem 4rem;
    background-color: ${props => props.theme.color.white};

    .input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 2rem;
    }

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 0.5rem;
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      border: none;
      background-color: transparent;

      &:hover {
        background-color: ${props => props.theme.color.lightGrey};
      }

      .icon {
        height: 2.8rem;
        width: 2.8rem;
      }
    }
  }
`;
