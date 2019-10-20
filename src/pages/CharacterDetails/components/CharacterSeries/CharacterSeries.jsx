import React from 'react';

import { Typography, ThumbnailPreview } from '../../../../components';

import { Container } from './styles';

const CharacterSeries = ({ title, thumbnail, description }) => (
  <Container data-testid="CharacterSeries">
    <Typography variant="h3">{title}</Typography>
    <div className="series-content">
      <ThumbnailPreview
        className="series-thumbnail"
        thumbnailUrl={thumbnail}
        alt={title}
      />
      <div className="series-description-container">
        <Typography variant="h4">Series description</Typography>
        <Typography variant="p1">{description}</Typography>
      </div>
    </div>
  </Container>
);

export default CharacterSeries;
