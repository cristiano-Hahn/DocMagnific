import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import example1 from './views/examples/example1/example1';
import './App.css';
import MsysERP from './views/msyserp';
import initialPage from './views/initialPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={initialPage} />
        <Route exact path="/example1" component={example1} />[
        <Route exact path="/msyserp" component={MsysERP} />

      </Switch>
    );
  }
}

export default App;
