import React from 'react';

import { Container } from './styles';

const Loading = ({ loading }) =>
  loading && (
    <Container data-testid="Loading">
      <div className="loader" />
    </Container>
  );

export default Loading;
