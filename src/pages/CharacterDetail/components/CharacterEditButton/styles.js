import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  width: 100%;
  margin: 1rem 0;

  .edit-character {
    display: flex;
    align-content: center;
    justify-content: space-around;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    background-color: transparent;
    color: ${props => props.theme.color.darkGrey};
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      background-color: ${props => props.theme.color.lightGrey};
      color: ${props => props.theme.color.black};
    }

    .text {
      vertical-align: middle;
      font-size: 1.6rem;
      font-weight: 400;
      height: 100%;
    }

    .edit-icon-container {
      display: flex;
      align-content: center;
      justify-content: center;
      height: 100%;
      margin-left: 1rem;
      .edit-icon {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`;
