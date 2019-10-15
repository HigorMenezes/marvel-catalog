import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  padding: 1rem;

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.color.white};

    overflow: hidden;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem rgba(0, 0, 0, 0.06),
      0.1rem 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.2);

    transition: box-shadow 0.2s;

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
      width: 100%;
      height: 8rem;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.color.white};

      .header {
        text-align: center;
        line-height: 1.2;
        font-size: 2.5rem;
        font-weight: 400;
        word-wrap: break-word;
        color: ${props => props.theme.color.black};
      }
    }

    .card-nav {
      width: 100%;
      min-height: 6rem;

      display: flex;
      align-items: center;
      justify-content: space-around;

      .icon-box {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 1rem;

        &:hover {
          background-color: ${props => props.theme.color.lightGrey};
        }

        .icon {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }

  ${media.greaterThan('medium')`
    width: 50%;
  `}

  ${media.greaterThan('large')`
    width: 25%;
  `}
`;
