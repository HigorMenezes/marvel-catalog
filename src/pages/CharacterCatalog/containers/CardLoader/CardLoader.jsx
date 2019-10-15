import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CHARACTERS } from './queries';

import { CharacterCard } from '../../../../components';
import { useScrollBarAtBottom } from '../../../../hooks';
import { Container } from './styles';

const CardLoader = ({ offset }) => {
  const scrollBarIsAtBottom = useScrollBarAtBottom();

  const { data, fetchMore, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: { offset, limit: 0 },
  });

  if (scrollBarIsAtBottom && data && data.characters && !loading) {
    fetchMore({
      variables: {
        offset,
        limit: data.characters.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          characters: [...prev.characters, ...fetchMoreResult.characters],
        };
      },
    });
  }

  return (
    <Container>
      {data &&
        data.characters &&
        data.characters.map(({ name, thumbnail, id }) => (
          <CharacterCard key={id} name={name} thumbnail={thumbnail} />
        ))}
      {loading && <p>loading</p>}
    </Container>
  );
};

export default CardLoader;
