import React from 'react';

import { Typography } from '../../../../components';

import { Container } from './styles';

const CharacterSeries = ({ title, thumbnail, description }) => (
  <Container>
    <Typography variant="h3">{title}</Typography>
    <div className="series-content">
      <div className="series-thumbnail-container">
        <img className="series-thumbnail" src={thumbnail} alt={title} />
      </div>
      <div className="series-description-container">
        <Typography variant="h4">Series description</Typography>
        <Typography variant="p1">{description}</Typography>
      </div>
    </div>
  </Container>
);

export default CharacterSeries;
