import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Mainpage from './Mainpage'
class App extends Component {

  handleSubmit = (data) => {
    console.log("why", data)
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ username: data.username, password: data.password})
    }).then(res => res.json())
    .then(json => {
      console.log("What is this", json)
      debugger
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id)
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
