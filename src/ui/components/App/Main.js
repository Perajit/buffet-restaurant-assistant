import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BillPageContainer, PromotionsPageContainer } from '../'

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BillPageContainer} />
        <Route exact path="/bill" component={BillPageContainer} />
        <Route exact path="/promotions" component={PromotionsPageContainer} />
      </div>
    )
  }
}

export default Main