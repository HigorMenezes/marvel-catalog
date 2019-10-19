import React from 'react';

import { Container } from './styles';

const Loading = ({ loading }) =>
  loading && (
    <Container>
      <div className="loader" />
    </Container>
  );

export default Loading;
