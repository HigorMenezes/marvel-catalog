import React from 'react';

import { Container } from './styles';

const ThumbnailPreview = ({ thumbnailUrl, alt, className }) => (
  <Container className={className}>
    <img className="thumbnail" src={thumbnailUrl} alt={alt} />
  </Container>
);

export default ThumbnailPreview;
