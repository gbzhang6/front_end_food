import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Login = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type='password' placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Login;
