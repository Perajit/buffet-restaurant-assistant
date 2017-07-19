import React, { Component } from 'react'
import CouponPromotionList from './CouponPromotionList'
import CouponPromotionFormModal from './CouponPromotionFormModal'
import {
  Row,
  Col,
  Button,
  Glyphicon
} from 'react-bootstrap'

class CouponPromotionPanelHeader extends Component {
  render() {
    let { onReloadPromotions, onShowCouponPromotionForm } = this.props

    return (
      <Row className="show-grid">
        <Col xs={8} md={8}>Coupon Promotions</Col>
        <Col xs={4} md={4} className="text-right">
          <Button
              bsSize="xsmall"
              onClick={ onReloadPromotions }>
            <Glyphicon glyph="refresh" />
          </Button>
          <Button
              bsSize="xsmall"
              onClick={ onShowCouponPromotionForm }>
            <Glyphicon glyph="plus" />
          </Button>
        </Col>
      </Row>
    )
  }
}

export default CouponPromotionPanelHeader