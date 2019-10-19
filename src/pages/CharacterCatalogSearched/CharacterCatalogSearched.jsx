import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CardCatalogSearchedLoader } from './containers';

import { Container } from './styles';

const CharacterCatalogSearched = () => {
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [search]);

  return (
    <Container>
      <CardCatalogSearchedLoader
        offset={10}
        search={new URLSearchParams(search).get('search_query')}
      />
    </Container>
  );
};

export default CharacterCatalogSearched;
