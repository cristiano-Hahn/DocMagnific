import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import example1 from './views/examples/example1/example1'
class App extends Component {
  render() {
    return (
    
    <React.Fragment>
      <HashRouter>
        <Route exact path="/example1" component={example1}/>


      </HashRouter>
    </React.Fragment>
    );
  }
}

export default App;
