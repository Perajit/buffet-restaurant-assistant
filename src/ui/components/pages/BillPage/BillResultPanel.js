import React, { Component } from 'react'

class BillResultPanel extends Component {
  render() {
    return (
      <div className="text-center">
        <span className="lead">{ this.props.netBillAmount } Baht</span>
      </div>
    )
  }
}

export default BillResultPanel
