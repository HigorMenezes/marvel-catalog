import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CharacterCatalogSearchedLoader } from './containers';
import { PageTitle } from '../../components';

import { Container } from './styles';

const CharacterCatalogSearched = () => {
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [search]);

  return (
    <Container data-testid="CharacterCatalogSearched">
      <PageTitle>Character Catalog Researched</PageTitle>
      <CharacterCatalogSearchedLoader
        offset={10}
        search={new URLSearchParams(search).get('search_query')}
      />
    </Container>
  );
};

export default CharacterCatalogSearched;
