import React from 'react';
import { useParams } from 'react-router-dom';
import { CardLoader } from './containers';

import { Container } from './styles';

const CharacterCatalog = () => {
  const { search } = useParams();
  return (
    <Container>
      <CardLoader offset={8} search={search} />
    </Container>
  );
};

export default CharacterCatalog;
