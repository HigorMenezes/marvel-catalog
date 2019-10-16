import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_CHARACTERS } from './queries';
import {
  CharacterCard,
  FetchMoreDataButton,
  Loading,
} from '../../../../components';
import { Container } from './styles';

const CardLoader = ({ offset, search }) => {
  const [noMoreData, setNoMoreData] = useState(false);

  const variables = {
    offset,
    limit: 0,
  };
  if (search) {
    variables.where = {
      nameStartsWith: search,
    };
  }

  const { data, fetchMore, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  function handleFetchMoreData() {
    fetchMore({
      variables: {
        offset,
        limit: data.characters.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.characters.length === 0) {
          setNoMoreData(true);
          return prev;
        }
        return {
          ...prev,
          characters: [...prev.characters, ...fetchMoreResult.characters],
        };
      },
    });
  }

  return (
    <Container>
      <div className="card-characters-list">
        {data &&
          data.characters &&
          data.characters.map(({ name, thumbnail, id }) => (
            <CharacterCard key={id} name={name} thumbnail={thumbnail} />
          ))}
        {!loading &&
          data &&
          data.characters &&
          data.characters.length === 0 && <p>No data found</p>}
      </div>

      <div className="fetch-more-data-box">
        {loading ? (
          <Loading />
        ) : (
          !noMoreData &&
          data &&
          data.characters &&
          data.characters.length > 0 && (
            <FetchMoreDataButton type="button" onClick={handleFetchMoreData}>
              Fetch more data
            </FetchMoreDataButton>
          )
        )}
      </div>
    </Container>
  );
};

export default CardLoader;
