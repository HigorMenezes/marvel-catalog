import React from 'react';

import { Container } from './styles';

const SuccessCard = ({ children }) => (
  <Container data-testid="SuccessCard">{children}</Container>
);

export default SuccessCard;
