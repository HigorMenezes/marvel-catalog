import React from 'react';

import { Container } from './styles';

const PageTitle = ({ children }) => (
  <Container>
    <h2 className="title" data-testid="PageTitle">
      {children}
    </h2>
  </Container>
);

export default PageTitle;
