import React from 'react';

import { Container } from './styles';

const PageTitle = ({ children }) => (
  <Container>
    <h2 className="title">{children}</h2>
  </Container>
);

export default PageTitle;
