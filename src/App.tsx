import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './page/Home';

interface AppProps {}

function App(props: AppProps) {
  console.log(Home);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
