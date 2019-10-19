import React from 'react';

import {
  Container,
  Header1,
  Header2,
  Header3,
  Header4,
  Paragraph1,
} from './styles';

const Typography = ({ variant, children }) => (
  <Container>
    {(variant === 'h1' && <Header1>{children}</Header1>) ||
      (variant === 'h2' && <Header2>{children}</Header2>) ||
      (variant === 'h3' && <Header3>{children}</Header3>) ||
      (variant === 'h4' && <Header4>{children}</Header4>) ||
      (variant === 'p1' && <Paragraph1>{children}</Paragraph1>)}
  </Container>
);

export default Typography;
