import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = {
    activeItem: '',
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
        <img src={logo} alt="home button"/>
        </Menu.Item>
        { localStorage.getItem('token') ?
          <Menu.Item
            name='matches'
            active={activeItem === 'matches'}
            onClick={this.handleItemClick}
          />
        :
        null }
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
         { localStorage.getItem('token') ?
           <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={()=>localStorage.clear()}
            href="/"
            />
          :
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            href="/signup"
          />}
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
