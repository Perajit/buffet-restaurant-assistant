import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import BillPage from './BillPage'
import { BILL_ENDPOINT } from '../../../constants/endpoints'

class BillPageContainer extends Component {
  state = {
    netBillAmount: ''
  }
  
  render() {
    let { netBillAmount } = this.state

    return (
      <BillPage
          netBillAmount={ netBillAmount }
          onSubmitForm={ this.handleSubmitBillForm } />
    )
  }

  handleSubmitBillForm = (data) => {
    const url = BILL_ENDPOINT
    let { totalCustomers, coupons } = data

    fetch(BILL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.status) {
          let { netBillAmount } = data
          this.setState({ netBillAmount })
        }
      })
  }
}

export default BillPageContainer