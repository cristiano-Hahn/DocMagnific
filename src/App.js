import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MsysERP from './views/msyserp';
import initialPage from './views/initialPage';
import MsysERP_Cadastros_Produtos from './views/msyserp/cadastros/produtos';
import MsysERP_Cadastros_Pessoas from './views/msyserp/cadastros/pessoas';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={initialPage} />
        <Route exact path="/msyserp" component={MsysERP} />
        <Route exact path="/msyserp/cadastros/produtos" component={MsysERP_Cadastros_Produtos} />
        <Route exact path="/msyserp/cadastros/pessoas" component={MsysERP_Cadastros_Pessoas} />

      </Switch>
    );
  }
}

export default App;
