import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { Navbar } from '../../components';

import { Container } from './styles';

const AppLayout = () => (
  <Container data-testid="AppLayout">
    <BrowserRouter basename="/marvel-catalog">
      <div className="navbar" data-testid="navbar">
        <Navbar />
      </div>
      <main className="content" data-testid="main-content">
        <Routes />
      </main>
    </BrowserRouter>
  </Container>
);

export default AppLayout;
