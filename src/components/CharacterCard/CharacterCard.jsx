import React from 'react';

import { Container } from './styles';

const CharacterCard = ({ name, thumbnail, handleClickCard }) => (
  <Container>
    <div className="card" onClick={handleClickCard}>
      <div className="card-image">
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
