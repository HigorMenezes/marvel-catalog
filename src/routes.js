import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CharacterCatalog, CharacterDetail, CharacterEdit } from './pages';

const RedirectToCharacter = () => <Redirect from="/" to="/characters" />;

const Router = () => (
  <Switch>
    <Route path="/" exact component={RedirectToCharacter} />
    <Route path="/characters" component={CharacterCatalog} />
    <Route path="/results" component={CharacterCatalog} />
    <Route path="/details" component={CharacterDetail} />
    <Route path="/edit" component={CharacterEdit} />
  </Switch>
);

export default Router;
