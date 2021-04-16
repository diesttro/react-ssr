import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import '../styles.scss';

const App = () => (
  <Switch>
    <Route path="/counter">
      <Counter />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
