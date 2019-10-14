import React from 'react';

import { Container } from './styles';

const CharacterCard = () => (
  <Container>
    <div
      className="character-image"
      style={{
        backgroundImage: `url(${'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'})`,
      }}
    />
    <header className="character-header">3-D Man</header>
  </Container>
);

export default CharacterCard;
