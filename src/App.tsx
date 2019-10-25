import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './page/HomePage';

interface AppProps {}

function App(props: AppProps) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
