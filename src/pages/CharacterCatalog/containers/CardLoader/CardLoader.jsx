import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { marvelql } from '../../../../api';

import { CharacterCard } from '../../../../components';
import { Container } from './styles';

const CardLoader = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    marvelql
      .query({
        query: gql`
          {
            characters {
              id
              thumbnail
              name
            }
          }
        `,
      })
      .then(({ data }) => setCharacters(data.characters));
  }, []);

  return (
    <Container>
      {characters.map(({ name, thumbnail, id }) => (
        <CharacterCard key={id} name={name} thumbnail={thumbnail} />
      ))}
    </Container>
  );
};

export default CardLoader;
