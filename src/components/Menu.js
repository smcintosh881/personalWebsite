import React, { Component } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleRegisterClick = (e, { name }) => window.open('https://docs.google.com/forms/d/1m9iiJHQfPDUsvzSHVKbVS4ROC8WTn_kIe1qYK5D0mAo/viewform?edit_requested=true')


  render() {
    const { activeItem } = this.state

    return (
        <Menu fixed='top' inverted color='violet' size='massive'>
          <Menu.Item>
            <Image src={require('../../public/backup.jpg')} verticalAlign='middle' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item name='schedule' active={activeItem === 'schedule'} onClick={this.handleItemClick} />
            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick} />
            <Menu.Item name='sponsors' active={activeItem === 'sponsors'} onClick={this.handleItemClick} />
            <Menu.Item>
              <Button color='yellow' basic onClick={this.handleRegisterClick}>Register</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}