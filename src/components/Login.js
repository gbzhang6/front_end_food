import React, { Component } from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    username:'',
    password:'',
  }

  onSubmit = (event) => {
    event.preventDefault()
    event.persist()
    this.setState({...this.state, toggle: false})
    fetch("http://localhost:3000/api/v1/sessions/", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify({ username: event.target.username.value, password: event.target.password.value})
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      setTimeout(()=> this.props.history.push('/home'), 1000)
    })
  }

  render(){
    return (
      <Card.Group centered >
        <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Username</label>
          <input name="username" placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" type='password' placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Log In</Button>
        </Form>
      </Card.Group>
    )
  }

}

const mapStateToProps = state => {
    return state
}
const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));
