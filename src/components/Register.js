import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Register = (props) => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type='password' placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <label>Retype Password</label>
      <input type='password' placeholder='Retype Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Do you promise to be AWESOME?' />
    </Form.Field>
    <Button type='submit' onClick={()=>this.props.handleClick(this.props)}>Submit</Button>
  </Form>
)

export default Register;
