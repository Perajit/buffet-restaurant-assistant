import React, { Component } from 'react'
import { InputField } from '../../'

class TotalCustomersForm extends Component {
  render() {
    let { totalCustomers, onChangeValue } = this.props

    return (
      <InputField
          type="number"
          name="totalCustomers"
          label="Total Customers"
          value={ totalCustomers }
          onChangeValue={ onChangeValue } />
    )
  }
}

export default TotalCustomersForm