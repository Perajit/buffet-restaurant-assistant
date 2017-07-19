import React, { Component } from 'react'
import BillResultPanel from './BillResultPanel'
import {
  Modal
} from 'react-bootstrap'

class BillResultPanelModal extends Component {
  render() {
    let { netBillAmount, show, onHide } = this.props

    return (
      <Modal
          show={ show }
          onHide={ onHide }>
        <Modal.Header closeButton>
          <Modal.Title>Net Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BillResultPanel
              netBillAmount={ netBillAmount } />
        </Modal.Body>
      </Modal>
    )
  }
}

export default BillResultPanelModal
