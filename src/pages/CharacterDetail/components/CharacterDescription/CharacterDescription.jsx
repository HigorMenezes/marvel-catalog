import React from 'react';

import { Typography } from '../../../../components';

import { Container } from './styles';

const CharacterDescription = ({ description }) => (
  <Container>
    <Typography variant="h2">Description</Typography>
    <Typography variant="p1">{description}</Typography>
  </Container>
);

export default CharacterDescription;
