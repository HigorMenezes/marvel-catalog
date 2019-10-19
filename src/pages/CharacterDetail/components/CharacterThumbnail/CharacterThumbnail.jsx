import React from 'react';

import { Container } from './styles';

const CharacterThumbnail = ({ thumbnail, alt }) => (
  <Container>
    <img src={thumbnail} alt={alt} className="thumbnail" />
  </Container>
);

export default CharacterThumbnail;
