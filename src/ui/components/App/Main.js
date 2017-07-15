import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Bill, Promotions } from '../'

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Bill} />
        <Route exact path="/bill" component={Bill} />
        <Route exact path="/promotions" component={Promotions} />
      </div>
    )
  }
}

export default Main