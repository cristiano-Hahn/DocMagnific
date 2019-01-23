import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import example1 from './views/examples/example1/example1';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/example1" component={example1} />
      </Switch>
    );
  }
}

export default App;
