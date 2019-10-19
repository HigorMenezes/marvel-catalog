import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.5rem;

  .character-detail-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .character-content {
      width: 100%;
      padding: 2rem;

      z-index: 1;
      box-shadow: -0.2rem -0.2rem 1rem 0.4rem rgba(0, 0, 0, 0.1),
        0rem -0.4rem 1rem 0.4rem rgba(0, 0, 0, 0.15),
        0.1rem 0.1rem 1rem 0.4rem rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;

      .character-series {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
      }
    }
  }

  .fetch-more-data-box {
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
