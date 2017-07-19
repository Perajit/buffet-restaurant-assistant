import React, { Component } from 'react'
import CouponPromotionForm from './CouponPromotionForm'
import {
  Modal
} from 'react-bootstrap'

class CouponPromotionPanelModal extends Component {
  render() {
    let { couponPromotion, show, onHide, onSubmit } = this.props
    let title = (couponPromotion ? 'Edit' : 'Add') + ' Coupon'

    return (
      <Modal
          show={ show }
          onHide={ onHide }>
        <Modal.Header closeButton>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CouponPromotionForm
              couponPromotion={ couponPromotion }
              onSubmit={ onSubmit } />
        </Modal.Body>
      </Modal>
    )
  }
}

export default CouponPromotionPanelModal