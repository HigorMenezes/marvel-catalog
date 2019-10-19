import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { GET_ALL_CHARACTERS } from './queries';
import { CharacterCardList } from '../../../../components';
import { Container } from './styles';

const CardCatalogLoader = ({ offset }) => {
  const history = useHistory();
  const [thereAreMoreCharacters, setThereAreMoreCharacters] = useState(true);

  const {
    data: charactersData,
    fetchMore,
    loading: charactersLoading,
  } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      offset,
      limit: 0,
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleFetchMoreCharacters() {
    fetchMore({
      variables: {
        offset,
        limit: charactersData.characters.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.characters.length === 0) {
          setThereAreMoreCharacters(false);
        }
        return {
          ...prev,
          characters: [...prev.characters, ...fetchMoreResult.characters],
        };
      },
    });
  }

  function handleClickOnCard(id) {
    history.push({
      pathname: '/details',
      search: String(new URLSearchParams({ character_id: id })),
    });
  }

  return (
    <Container>
      <CharacterCardList
        characters={charactersData && charactersData.characters}
        loading={charactersLoading}
        handleFetchMoreCharacters={handleFetchMoreCharacters}
        handleClickOnCard={handleClickOnCard}
        thereAreMoreCharacters={thereAreMoreCharacters}
      />
    </Container>
  );
};

export default CardCatalogLoader;
