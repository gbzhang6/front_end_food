import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react'
import logo from '../images/logo.svg';

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
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="/home">
        <img src={logo} alt="home button"/>
        </Menu.Item>
        { localStorage.getItem('token') ?
          <Menu.Item
            name='matches'
            active={activeItem === 'matches'}
            onClick={this.handleItemClick} href="/match"
          >
            <Icon name='like' />
            Matched
          </Menu.Item>
        :
        null }
        { localStorage.getItem('token') ?
          <Menu.Item name='map' active={activeItem === 'map'} onClick={this.handleItemClick} href="/map">
            <Icon name='map outline' />
            Map
          </Menu.Item>
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
          null}
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
