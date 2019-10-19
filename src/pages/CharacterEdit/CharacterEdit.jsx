import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageTitle } from '../../components';
import { CharacterEditLoader } from './containers';
import { Container } from './styles';

const CharacterEdit = () => {
  const { search } = useLocation();
  return (
    <Container>
      <PageTitle>Character Editing</PageTitle>
      <CharacterEditLoader
        characterId={Number(new URLSearchParams(search).get('character_id'))}
      />
    </Container>
  );
};

export default CharacterEdit;
