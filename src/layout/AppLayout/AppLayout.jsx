import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { Navbar } from '../../components';

import { Container } from './styles';

const AppLayout = () => (
  <Container>
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Routes />
      </div>
    </BrowserRouter>
  </Container>
);

export default AppLayout;
