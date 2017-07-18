import React, { Component } from 'react'
import FormPanel from './FormPanel'
import ResultPanel from './ResultPanel'

class BillPage extends Component {
  render() {
    let { netBillAmount, onSubmitForm } = this.props

    return (
      <div>
        <FormPanel
            onSubmitForm={ onSubmitForm } />
        <ResultPanel
            value={ netBillAmount } />
      </div>
    )
  }
}

export default BillPage