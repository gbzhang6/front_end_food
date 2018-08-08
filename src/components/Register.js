import React, { Component } from 'react';
import { Button, Checkbox, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/match-actions';
import { withRouter } from 'react-router-dom';
import wine from '../images/wine.svg';

class Register extends Component {
  state = {
    username:'',
    password:'',
    reType: '',
    errors: false,
  }

  handleSubmit = () => {
    if (this.state.password !== this.state.reType){
      alert("Your passwords do not match!")
      this.setState({
        errors: true
      })
    } else {
      fetch("http://localhost:3000/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.password})
      }).then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        localStorage.setItem('id', json.id);
        setTimeout(()=> this.props.history.push('/home'), 1000)
      })
      .then(()=>this.props.updateUser(localStorage.getItem('id')))
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  redirectToMain = () => {
    this.props.history.push('/')
  }

  render (){
    return (
      <div className="register-form">
      <Card.Group centered >
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <h3>Sign Up For Dine Out</h3>
          <img src={wine} className="wine" alt="wine-glass"/>
          <h4 className="form-h4">You must fill out all fields</h4>
          <label>Username</label>
          <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={this.handleChange} name="password" value={this.state.password} type='password' placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <label>Retype Password</label>
          <input onChange={this.handleChange} name="reType" type='password' placeholder='Retype Password' value={this.state.reType} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Do you promise to be AWESOME?' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <div>You already have an account? <p className="signup" onClick={this.redirectToMain}>Let's signin! </p> </div>
      </Form>
      </Card.Group>
      </div>
    )
  }
}

export default withRouter(connect(null, { updateUser })(Register));
