import React, { Component } from 'react'
import { InputField } from '../../'
import {
  Button
} from 'react-bootstrap'

class CouponPromotionForm extends Component {
  state = {
    couponCode: '',
    numberOfCustomers: '',
    pctDiscount: ''
  }

  render() {
    let { couponCode, numberOfCustomers, pctDiscount } = this.state
    let preventSubmit = !this.validateForm()

    return (
      <div>
        <InputField
            type="text"
            name="couponCode"
            label="Coupon Code"
            value={ couponCode }
            onChangeValue={ this.changeCouponCode } />
        <InputField
            type="number"
            name="numberOfCustomers"
            label="Required Number of Customers"
            value={ numberOfCustomers }
            onChangeValue={ this.changeNumberOfCustomers } />
        <InputField
            type="number"
            name="pctDiscount"
            label="Discount (%)"
            value={ pctDiscount }
            onChangeValue={ this.changePctDiscount } />
        <div>
          <Button
              disabled={ preventSubmit }
              onClick={ this.submitForm }>Submit</Button>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    let { couponPromotion } = nextProps
    let couponCode = ''
    let numberOfCustomers = ''
    let pctDiscount = ''

    if (couponPromotion) {
      couponCode = couponPromotion.couponCode
      numberOfCustomers = couponPromotion.numberOfCustomers
      pctDiscount = couponPromotion.pctDiscount
    }

    this.setState({ couponCode, numberOfCustomers, pctDiscount })
  }

  validateForm() {
    let { couponCode, numberOfCustomers, pctDiscount } = this.state

    return numberOfCustomers > 0 && couponCode.length > 0 && pctDiscount > 0
  }

  changeCouponCode = (couponCode) => {
    this.setState({ couponCode })
  }

  changeNumberOfCustomers = (numberOfCustomers) => {
    this.setState({ numberOfCustomers })
  }

  changePctDiscount = (pctDiscount) => {
    this.setState({ pctDiscount })
  }

  submitForm = (e) => {
    let data = Object.assign({}, this.state)
    let { couponPromotion } = this.props
    
    if (couponPromotion) {
      data.id = couponPromotion.id
    }

    this.props.onSubmit(data)
  }
}

export default CouponPromotionForm