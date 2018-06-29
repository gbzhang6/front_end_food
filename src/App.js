import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import NavBar from './Containers/NavBar'
import Mainpage from './Containers/Mainpage';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import { routeActions } from 'react-router-redux';

class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar />
        <Mainpage />
      </div>
    );
  }
}

export default App;
