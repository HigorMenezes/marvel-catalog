import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';

import { GET_CHARACTER_BY_ID, GET_SERIES_BY_CHARACTER_ID } from './queries';
import { combineOne } from '../../../../helpers/combineCharacters';
import CharacterDetailsRender from '../CharacterDetailsRender';
import { Container } from './styles';

const CharacterDetailsLoader = ({ characterId }) => {
  const history = useHistory();
  const characters = useSelector(state => state.characters);
  const [thereAreMoreSeries, setThereAreMoreSeries] = useState(true);
  const { data: characterData, loading: characterLoading } = useQuery(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        where: { id: characterId },
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  const {
    data: seriesData,
    loading: seriesLoading,
    fetchMore: fetchMoreSeries,
  } = useQuery(GET_SERIES_BY_CHARACTER_ID, {
    variables: {
      offset: 3,
      limit: 0,
      where: { characters: [characterId] },
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleFetchMoreSeries() {
    fetchMoreSeries({
      variables: {
        offset: 3,
        limit: seriesData.series.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.series.length === 0) {
          setThereAreMoreSeries(false);
        }
        return {
          ...prev,
          series: [...prev.series, ...fetchMoreResult.series],
        };
      },
    });
  }

  function handleEditCharacter(id) {
    history.push({
      pathname: '/edit',
      search: String(new URLSearchParams({ character_id: id })),
    });
  }

  return (
    <Container data-testid="CharacterDetailsLoader">
      <CharacterDetailsRender
        loading={characterLoading || seriesLoading}
        character={
          characterData &&
          characterData.characters &&
          combineOne({
            baseCharacter: characterData.characters[0],
            replaceCharacters: characters.editedCharacters,
          })
        }
        series={seriesData && seriesData.series}
        handleEditCharacter={() => handleEditCharacter(characterId)}
        thereAreMoreSeries={thereAreMoreSeries}
        handleFetchMoreSeries={handleFetchMoreSeries}
      />
    </Container>
  );
};

export default CharacterDetailsLoader;
