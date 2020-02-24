import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import PostWritePage from './pages/post/PostWritePage';
import RegisterPage from './pages/auth/RegisterPage';
import TagPage from './pages/tags/TagPage';
import UserPage from './pages/user/UserPage';
import Popup2 from './samples/Popup2';

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
        <UserPage />
      </Route>
      <Route path="/tags">
        <TagPage />
      </Route>
      <Route path="/write">
        <PostWritePage />
      </Route>
      <Route path="/samples">
        <Popup2 />
      </Route>
    </Switch>
  );
}

export default App;
