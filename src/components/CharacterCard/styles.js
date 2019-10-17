import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  padding: 1rem;

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: ${props => props.theme.color.white};

    overflow: hidden;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem rgba(0, 0, 0, 0.06),
      0.1rem 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.2);

    transition: box-shadow 0.2s;
    cursor: pointer;

    &:hover {
      box-shadow: 0.1rem 0.1rem 0.5rem 0.4rem rgba(0, 0, 0, 0.1),
        0.1rem 0.2rem 1.5rem 0.4rem rgba(0, 0, 0, 0.3);

      & > .card-image > .image {
        transform: scale(1.2);
        filter: contrast(1.2);
      }
    }

    .card-image {
      width: 100%;
      height: 100%;
      overflow: hidden;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      .image {
        width: 100%;
        height: 100%;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: contrast(0.8);
        transition: transform 0.2s, filter 0.4s;
      }
    }

    .card-header {
      position: absolute;
      top: 80%;
      left: 50%;
      width: 90%;
      height: 8rem;
      transform: translateX(-50%);
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => rgba(props.theme.color.black, 0.8)};
      box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem rgba(0, 0, 0, 0.06),
        0.1rem 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.2);

      .header {
        text-align: center;
        line-height: 1.2;
        font-size: 2.5rem;
        font-weight: 400;
        word-wrap: break-word;
        color: ${props => props.theme.color.white};
      }
    }
  }
`;
