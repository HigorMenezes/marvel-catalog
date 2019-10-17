import React from 'react';

import { Container } from './styles';

const FetchMoreDataButton = ({ type, onClick, children }) => (
  <Container type={type} onClick={onClick}>
    {children}
  </Container>
);

export default FetchMoreDataButton;
