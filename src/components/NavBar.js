import React, { Component } from 'react';
import {connect} from 'react-redux';
import Register from '../Components/Register';
import Login from '../Components/Login';
import { Input, Menu, Segment } from 'semantic-ui-react'
import logo from '../images/logo.svg';

class NavBar extends Component {
  state = {
    activeItem: '',
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
        <img src={logo}/>
        </Menu.Item>
        <Menu.Item
          name='matched'
          active={activeItem === 'matched'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
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
