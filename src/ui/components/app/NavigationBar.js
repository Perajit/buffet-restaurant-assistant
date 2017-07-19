import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'

class NavigationBar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Buffet Restaurant Assistant</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/bill">Bill</NavItem>
            <NavItem href="/promotions">Promotions</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar