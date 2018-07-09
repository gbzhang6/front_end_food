import React, { Component } from 'react';
import { Button, Checkbox, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/match-actions';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  state = {
    username:'',
    password:'',
  }

  handleSubmit = () => {
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render (){
    return (
      <div className="register-form">
      <Card.Group centered >
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <h3>Sign Up Now</h3>
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
          <input type='password' placeholder='Retype Password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Do you promise to be AWESOME?' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </Card.Group>
      </div>
    )
  }
}

export default withRouter(connect(null, { updateUser })(Register));
