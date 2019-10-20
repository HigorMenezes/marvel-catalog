import React, { useEffect } from 'react';
import { CharacterCatalogLoader } from './containers';
import { PageTitle } from '../../components';

import { Container } from './styles';

const CharacterCatalog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container data-testid="CharacterCatalog">
      <PageTitle>Character Catalog</PageTitle>
      <CharacterCatalogLoader offset={10} />
    </Container>
  );
};

export default CharacterCatalog;
