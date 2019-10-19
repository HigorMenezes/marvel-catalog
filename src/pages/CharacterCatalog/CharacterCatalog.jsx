import React from 'react';
import { useLocation } from 'react-router-dom';
import { CardCatalogLoader } from './containers';

import { Container } from './styles';

const CharacterCatalog = () => {
  const { search } = useLocation();
  return (
    <Container>
      <CardCatalogLoader
        offset={10}
        search={new URLSearchParams(search).get('search_query')}
      />
    </Container>
  );
};

export default CharacterCatalog;
