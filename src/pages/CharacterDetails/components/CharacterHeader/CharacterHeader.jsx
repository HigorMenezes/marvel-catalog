import React from 'react';
import { CharacterEditButton } from '..';
import { Container } from './styles';

const CharacterHeader = ({ children, handleEditCharacter }) => (
  <Container>
    <header className="header" data-testid="CharacterHeader">
      {children}
    </header>
    <CharacterEditButton handleEditCharacter={handleEditCharacter} />
  </Container>
);

export default CharacterHeader;
