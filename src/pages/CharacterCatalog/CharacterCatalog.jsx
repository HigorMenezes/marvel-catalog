import React from 'react';

import { CardLoader } from './containers';

import { Container } from './styles';

const CharacterCatalog = () => (
  <Container>
    <CardLoader offset={5} />
  </Container>
);

export default CharacterCatalog;
