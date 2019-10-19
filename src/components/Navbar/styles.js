import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  height: ${props => props.theme.navbar.height};
  background-color: ${props => props.theme.color.red};

  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: 0.1rem 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.2);
  padding: 0 2rem;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .short-icon {
      display: inline;
    }

    .large-icon {
      display: none;
    }
  }

  .search {
    padding-left: 2rem;
    width: 100%;
  }

  ${media.greaterThan('medium')`
    .logo-container {
      .short-icon {
        display: none;
      }
    }

    .logo-container {
      .large-icon {
        display: inline;
      }
    }

    .search {
      width: 50%;
    }
  `};

  ${media.greaterThan('large')`
    .logo-container {
      .short-icon {
        display: none;
      }
    }

    .logo-container {
      .large-icon {
        display: inline;
      }
    }

    .search {
      width: 33%;
    }
  `};
`;
