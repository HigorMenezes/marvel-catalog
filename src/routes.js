import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CharacterCatalog, CharacterDetail, CharacterEdit } from './pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CharacterCatalog} />
      <Route path="/:search" component={CharacterCatalog} />
      <Route path="/detail" component={CharacterDetail} />
      <Route path="/edit" component={CharacterEdit} />
    </Switch>
  </BrowserRouter>
);

export default Router;
