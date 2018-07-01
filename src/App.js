import React, { Component } from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import Register from './Components/Register';

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
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Register handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
