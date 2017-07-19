import React, { Component } from 'react'
import CouponCodesFormListItem from './CouponCodesFormListItem'
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Glyphicon,
  Badge
} from 'react-bootstrap'

class CouponCodesFormList extends Component {
  render() {
    let {
      coupons,
      onRemoveCouponCode,
      onIncreaseCouponCode,
      onDecreaseCouponCode
    } = this.props

    return (
      <ListGroup>
        {
          coupons.map(appliedCoupon => (
            <CouponCodesFormListItem
                key={ appliedCoupon.couponCode }
                couponCode={ appliedCoupon.couponCode }
                total={ appliedCoupon.total }
                onRemoveCouponCode={ onRemoveCouponCode }
                onIncreaseCouponCode={ onIncreaseCouponCode }
                onDecreaseCouponCode={ onDecreaseCouponCode } />
          ))
        }
      </ListGroup>
    )
  }
}

export default CouponCodesFormList