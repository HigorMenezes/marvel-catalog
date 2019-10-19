import React from 'react';

import { Container } from './styles';

const CharacterHeader = ({ children }) => (
  <Container>
    <span className="header">{children}</span>
  </Container>
);

export default CharacterHeader;
