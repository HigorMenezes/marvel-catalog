import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .label {
    width: 100%;
    font-size: 1.6rem;
    margin: 0.5rem 0rem;
  }
`;

export const Input = styled.input`
  width: 100%;

  border: 0.1rem solid ${props => props.theme.color.grey};
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 2rem;

  font-size: 1.6rem;

  &:hover {
    border: 0.1rem solid ${props => props.theme.color.darkGrey};
  }

  &:focus {
    border: 0.1rem solid ${props => props.theme.color.black};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  font-family: inherit;

  border: 0.1rem solid ${props => props.theme.color.grey};
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem 2rem;

  font-size: 1.6rem;

  &:hover {
    border: 0.1rem solid ${props => props.theme.color.darkGrey};
  }

  &:focus {
    border: 0.1rem solid ${props => props.theme.color.black};
  }
`;
