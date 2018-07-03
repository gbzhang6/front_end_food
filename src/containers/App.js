import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import { connect } from 'react-redux'; //needed to set up connection between store and this file
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';
import FindNewPlaces from '../Components/FindNewPlaces';
import Mainpage from './Mainpage';
class App extends Component {

  handleSubmit = (data) => {
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ username: data.username, password: data.password})
    }).then(res => res.json())
    .then(json => {
      debugger
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id)
    })
  }

  render() {
    const routes = [
    <Route key={"home"} exact path="/home" render={ () => <Mainpage />}/>
    ]
    const login = [<Route key={"login"} exact path="/login"  render={ () => <Login />}/>,<Route key={"signup"} path="/signup" exact render={ () => <Register/>}/>]

    return (
      <div className="App">
        <NavBar />
        { localStorage.getItem("token") ? routes : login }
        <Route key={"main"} exact path="/" render={ () =>
        <Mainpage />}/>
      </div>
    );
  }
}

export default App;
