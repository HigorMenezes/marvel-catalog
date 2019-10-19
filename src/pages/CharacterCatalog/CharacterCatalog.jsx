import React, { useEffect } from 'react';
import { CardCatalogLoader } from './containers';
import { PageTitle } from '../../components';

import { Container } from './styles';

const CharacterCatalog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <PageTitle>Character Catalog</PageTitle>
      <CardCatalogLoader offset={10} />
    </Container>
  );
};

export default CharacterCatalog;
