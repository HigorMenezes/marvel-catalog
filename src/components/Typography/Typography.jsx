import React from 'react';

import { Container, Header1, Header2, Header3 } from './styles';

const Typography = ({ variant, children }) => (
  <Container>
    {(variant === 'h1' && <Header1>{children}</Header1>) ||
      (variant === 'h2' && <Header2>{children}</Header2>) ||
      (variant === 'h3' && <Header3>{children}</Header3>)}
  </Container>
);

export default Typography;
