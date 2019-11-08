import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import Sample from './samples/Sample';
import PostWritePage from './pages/post/PostWritePage';

interface AppProps {}

function App(props: AppProps) {
  return (
    <Switch>
      <Route exact path={['/', '/trend', '/recent', '/subscript', '/tag']}>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/write">
        <PostWritePage />
      </Route>
      <Route path="/samples">
        <Sample />
      </Route>
    </Switch>
  );
}

export default App;
