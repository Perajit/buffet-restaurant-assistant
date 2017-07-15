import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/bill">Bill</Link>
        <Link to="/promotions">Promotions</Link>
      </nav>
    )
  }
}

export default Nav