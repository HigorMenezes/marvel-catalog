import React from 'react';
import { useLocation } from 'react-router-dom';

import { PageTitle } from '../../components';
import { CharacterDetailsLoader } from './containers';

import { Container } from './styles';

const CharacterDetail = () => {
  const { search } = useLocation();
  return (
    <Container data-testid="CharacterDetail">
      <PageTitle>Character Details</PageTitle>
      <CharacterDetailsLoader
        characterId={Number(new URLSearchParams(search).get('character_id'))}
      />
    </Container>
  );
};

export default CharacterDetail;
