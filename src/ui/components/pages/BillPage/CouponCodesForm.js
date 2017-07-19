import React, { Component } from 'react'
import CouponCodesFormList from './CouponCodesFormList'
import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class CouponCodesForm extends Component {
  render() {
    let {
      coupons,
      onRemoveCouponCode,
      onIncreaseCouponCode,
      onDecreaseCouponCode
    } = this.props

    return (
      <div>
        <FormGroup>
          <ControlLabel>Coupon Code</ControlLabel>
          <FormControl
              onKeyPress={ this.handleKeyPress } />
        </FormGroup>
        <div>
          <CouponCodesFormList
              coupons={ coupons }
              onRemoveCouponCode={ onRemoveCouponCode }
              onIncreaseCouponCode={ onIncreaseCouponCode }
              onDecreaseCouponCode={ onDecreaseCouponCode } />
        </div>
      </div>
    )
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      let target = e.target
      let { onAddCouponCode } = this.props

      onAddCouponCode(target.value)

      target.value = ''
    }
  }
}

export default CouponCodesForm