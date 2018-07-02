import React, { Component } from 'react';
import Register from '../Components/Register';
import Login from '../Components/Login';
import { Input, Menu } from 'semantic-ui-react'
import logo from '../images/logo.svg';

class NavBar extends Component {
  state = {
    activeItem: '',
  }

  switchRenderFunction = () => {
    switch(this.state.activeItem) {
      case 'signup':
      return (
        <Register />
      )
      case 'login':
      return (
        <Login />
      )
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    },()=>{this.switchRenderFunction()})
  }

  redirectToSignup = () => {
    this.props.history.push('/register')
    console.log("signup is clicked")
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
        <img src={logo} alt="home button"/>
        </Menu.Item>
        <Menu.Item
          name='matches'
          active={activeItem === 'matches'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.redirectToSignup}
          />
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
