import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 30rem;
  height: 40rem;
  margin: 1rem;
  padding: 1rem;

  background-color: ${props => props.theme.color.white};
  overflow: hidden;

  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.06),
    1px 2px 15px 2px rgba(0, 0, 0, 0.2);

  transition: all 0.2s;
  &:hover .character-image {
    transform: scale(1.2);
  }

  .character-image {
    width: 100%;
    height: 100%;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .character-header {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.color.black};
  }
`;
