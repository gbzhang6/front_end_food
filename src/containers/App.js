import React, { Component } from 'react';
import '../App.css';
import { render } from "react-dom";
import {
    BrowserRouter,
    Route,
} from "react-browser-router";
import Login from '../Components/Login';
import Register from '../Components/Register';
import Mainpage from './Mainpage';
import Matched from '../Components/Matched';
import OurMap from '../Components/Map';
class App extends Component {

  render() {
    // const routes = [
    // <Route key={"home"} exact path="/home" render={ () => <Mainpage />}/>,
    // <Route key={"match"} exact path="/match" render={ () => <Matched />}/>,
    // <Route key={"map"} exact path="/map" render={ () => <OurMap />}/>,
    // ]
    const login = [
    <Route key={"login"} exact path="/login"  render={ () => <Login />}/>,
    <Route key={"signup"} path="/signup" exact render={ () => <Register/>}/>
    ]

    return (
      <BrowserRouter>
        <div className="App">

          { localStorage.id && localStorage.id !== "undefined" ? login : null }
          <Route exact path="/home" component={Mainpage} />
          <Route exact path="/match" component={Matched} />
          <Route exact path="/map" component={OurMap} />
          <Route exact path="/" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
