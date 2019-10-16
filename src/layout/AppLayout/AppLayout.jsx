import React from 'react';
import Routes from '../../routes';
import { Navbar } from '../../components';

import { Container } from './styles';

const AppLayout = () => (
  <Container>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="content">
      <Routes />
    </div>
  </Container>
);

export default AppLayout;
