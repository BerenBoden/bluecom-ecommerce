import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

export class App extends Component {

  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact/>
        </Switch>
      </Router>
    )
  }
}

export default App
