import React from 'react';

import { Container } from './styles';

const CharacterCard = ({ name, thumbnail, onCLick }) => (
  <Container>
    <div className="card">
      <div className="card-image" onClick={onCLick}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        />
      </div>
      <div className="card-header">
        <header className="header">{name}</header>
      </div>
    </div>
  </Container>
);

export default CharacterCard;
