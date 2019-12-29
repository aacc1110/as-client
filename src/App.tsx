import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import Sample from './samples/Sample';
import PostWritePage from './pages/post/PostWritePage';
import RegisterPage from './pages/auth/RegisterPage';
import UserHomePage from './pages/user/UserHomePage';
import TagPage from './pages/tags/TagPage';

interface AppProps {}

function App(props: AppProps) {
  return (
    <Switch>
      <Route exact path={['/', '/trends', '/recents', '/subscripts']}>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/@:useremail">
        <UserHomePage />
      </Route>
      <Route path="/tags">
        <TagPage />
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
