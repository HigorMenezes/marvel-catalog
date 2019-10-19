import React from 'react';
import { CharacterEditButton } from '..';
import { Container } from './styles';

const CharacterHeader = ({ children, handleEditCharacter }) => (
  <Container>
    <header className="header">{children}</header>
    <CharacterEditButton handleEditCharacter={handleEditCharacter} />
  </Container>
);

export default CharacterHeader;
