import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';

interface AppProps {}

function App(props: AppProps) {
  return (
    <Switch>
      <Route exact path={['/', '/trend', '/recent', '/subscript']}>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
