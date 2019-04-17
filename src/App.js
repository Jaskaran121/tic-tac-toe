import React, { Component } from 'react';
import './index.css';
import { Switch,Route } from 'react-router-dom';
import Game from './game';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/" component = {Game}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
