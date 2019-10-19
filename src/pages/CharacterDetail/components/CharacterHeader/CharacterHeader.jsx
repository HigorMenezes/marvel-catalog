import React from 'react';

import { Container } from './styles';

const CharacterHeader = ({ children }) => (
  <Container>
    <header className="header">{children}</header>
  </Container>
);

export default CharacterHeader;
