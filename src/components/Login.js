import React, { Component } from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../actions/match-actions';
import { Link } from 'react-router-dom';

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
    .then(()=>this.props.updateUser(localStorage.getItem('id')))
  }

  redirectToSignup = () => {
    this.props.history.push('/signup')
  }

  render(){
    return (
      <div>

        <Card.Group centered >
          <Form onSubmit={this.onSubmit}>
          <h3>Log In</h3>
          <Form.Field>
            <label>Username</label>
            <input name="username" placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password" type='password' placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Log In</Button>
          <div onClick={this.redirectToSignup}>Don't Have an Account? <p className="signup">Create one here</p></div>
          </Form>
        </Card.Group>
      </div>
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

export default withRouter(connect(mapStateToProps, {mapActionsToProps, updateUser} )(Login));
