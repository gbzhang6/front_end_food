import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Mainpage from './Mainpage';
import Matched from '../Components/Matched';
import OurMap from '../Components/Map';
class App extends Component {

  render() {
    const routes = [
    <Route key={"home"} exact path="/home" render={ () => <Mainpage />}/>,
    <Route key={"match"} exact path="/match" render={ () => <Matched />}/>,
    <Route key={"map"} exact path="/map" render={ () => <OurMap />}/>,
    ]
    const login = [<Route key={"login"} exact path="/login"  render={ () => <Login />}/>,<Route key={"signup"} path="/signup" exact render={ () => <Register/>}/>]

    return (
      <div className="App">
        <NavBar />
        { localStorage.getItem("token") ? routes : login }
        <Route key={"main"} exact path="/" render={ () =>
        <Login />}/>
      </div>
    );
  }
}

export default App;
