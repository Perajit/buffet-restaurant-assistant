import React, { Component } from 'react'
import BillFormPanel from './BillFormPanel'
import BillResultPanelModal from './BillResultPanelModal'
import {
  PageHeader
} from 'react-bootstrap'

class BillPage extends Component {
  state = {
    shouldShowResultModal: false
  }

  render() {
    let { netBillAmount, onSubmitForm } = this.props
    let { shouldShowResultModal } = this.state
    let { hideResultModal } = this

    return (
      <div className="container">
        <PageHeader>Bill</PageHeader>
        <BillFormPanel
            onSubmitForm={ onSubmitForm } />
        <BillResultPanelModal
            show={ shouldShowResultModal }
            onHide={ hideResultModal }
            netBillAmount={ netBillAmount } />
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    let { netBillAmount } = nextProps
    if (netBillAmount) {
      this.setState({ shouldShowResultModal: true })
    }
  }

  hideResultModal = () => {
    this.setState({ shouldShowResultModal: false })
  }
}

export default BillPage