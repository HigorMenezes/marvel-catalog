import React from 'react';
import { FiEye, FiEdit } from 'react-icons/fi';

import { Container } from './styles';

const CharacterCard = ({ name, thumbnail }) => (
  <Container>
    <div className="card">
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
      <nav className="card-nav">
        <span className="icon-box">
          <FiEye className="icon" />
        </span>
        <span className="icon-box">
          <FiEdit className="icon" />
        </span>
      </nav>
    </div>
  </Container>
);

export default CharacterCard;
