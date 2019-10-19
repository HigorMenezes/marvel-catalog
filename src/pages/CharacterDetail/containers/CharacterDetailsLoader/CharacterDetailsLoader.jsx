import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CHARACTER_BY_ID, GET_SERIES_BY_CHARACTER_ID } from './queries';
import CharacterDetailsRender from '../CharacterDetailsRender';
import { Container } from './styles';

const CharacterDetailsLoader = ({ characterId }) => {
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

  return (
    <Container>
      <CharacterDetailsRender
        loading={characterLoading || seriesLoading}
        character={
          characterData &&
          characterData.characters &&
          characterData.characters[0]
        }
        series={seriesData && seriesData.series}
        thereAreMoreSeries={thereAreMoreSeries}
        handleFetchMoreSeries={handleFetchMoreSeries}
      />
    </Container>
  );
};

export default CharacterDetailsLoader;
