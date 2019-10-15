import React from 'react';
import Routes from '../../routes';
import { Navbar } from '../../components';

import { Container } from './styles';

const AppLayout = () => (
  <Container>
    <Navbar />
    <Routes />
  </Container>
);

export default AppLayout;
