import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CharacterCatalog, CharacterDetail, CharacterEdit } from './pages';

const Router = () => (
  <Switch>
    <Route path="/" exact component={CharacterCatalog} />
    <Route path="/search/:search" component={CharacterCatalog} />
    <Route path="/detail" component={CharacterDetail} />
    <Route path="/edit" component={CharacterEdit} />
  </Switch>
);

export default Router;
