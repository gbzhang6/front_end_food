import React, { Component } from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import wine from '../images/wine.svg';
import { updateUser, findMyMatches } from '../actions/match-actions';

class Login extends Component {
  state = {
    username:'',
    password:'',
    errors: false,
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

    })
    .then(() =>
    {if (localStorage.getItem("id") !== "undefined") {
    setTimeout(()=> this.props.history.push('/home'), 1000)}
  else {
    this.setState({
      errors: true
    })
  }})
    .then(()=>this.props.updateUser(localStorage.getItem('id')))
    .then(()=>this.props.findMyMatches(`${localStorage.id}`))
  }

  redirectToSignup = () => {
    this.props.history.push('/signup')
  }

  render(){
    return (
      <div>
        <h2>Dine Out</h2>
        <img src={wine} className="wine" alt="wine-glass"/>
        <Card.Group centered >
          <Form onSubmit={this.onSubmit}>
          <h3>Login</h3>
          <Form.Field error={this.state.errors}>
            <label>Username</label>
            <input name="username" placeholder='Username' />
          </Form.Field>
          <Form.Field error={this.state.errors}>
            <label>Password</label>
            <input name="password" type='password' placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Log In</Button>
          <div>Don't have an account. <p className="signup" onClick={this.redirectToSignup}>Create one here!</p> </div>
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

export default withRouter(connect(mapStateToProps, {mapActionsToProps, updateUser, findMyMatches} )(Login));
