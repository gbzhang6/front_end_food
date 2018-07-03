import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Register extends Component {
  state = {
    username:'',
    password:'',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render (){
    return (
      <Form onSubmit={()=>this.props.handleSubmit(this.state)}>
        <Form.Field>
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
    )
  }
}

export default Register;
