import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { GET_ALL_CHARACTERS_BY_START_NAME } from './queries';
import { CharacterCardList } from '../../../../components';
import { combine } from '../../../../helpers/combineCharacters';
import { Container } from './styles';

const CharacterCatalogSearchedLoader = ({ offset, search }) => {
  const history = useHistory();
  const characters = useSelector(state => state.characters);
  const [thereAreMoreCharacters, setThereAreMoreCharacters] = useState(true);

  const {
    data: charactersData,
    fetchMore,
    loading: charactersLoading,
  } = useQuery(GET_ALL_CHARACTERS_BY_START_NAME, {
    variables: { offset, limit: 0, where: { nameStartsWith: search } },
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
    <Container data-testid="CharacterCatalogSearchedLoader">
      <CharacterCardList
        characters={
          charactersData &&
          combine({
            baseCharacters: charactersData.characters,
            replaceCharacters: characters.editedCharacters,
          })
        }
        loading={charactersLoading}
        handleFetchMoreCharacters={handleFetchMoreCharacters}
        handleClickOnCard={handleClickOnCard}
        thereAreMoreCharacters={thereAreMoreCharacters}
      />
    </Container>
  );
};

export default CharacterCatalogSearchedLoader;
