import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import example1 from './views/examples/example1/example1';
import './App.css';
import MsysERP from './views/msyserp';
import initialPage from './views/initialPage';
import MsysERP_Cadastros_Produtos from './views/msyserp/cadastros/produtos';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={initialPage} />
        <Route exact path="/msyserp" component={MsysERP} />
        <Route exact path="/msyserp/cadastros/produtos" component={MsysERP_Cadastros_Produtos} />

      </Switch>
    );
  }
}

export default App;
