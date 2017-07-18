import React, { Component } from 'react'
import { InputField } from '../../'

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
        <div>
          <InputField
              type="text"
              name="couponCode"
              label="Coupon Code"
              value={ couponCode }
              onChangeValue={ this.handleChangeCouponCode } />
        </div>
        <div>
          <InputField
              type="number"
              name="numberOfCustomers"
              label="Required Number of Customers"
              value={ numberOfCustomers }
              onChangeValue={ this.handleChangeNumberOfCustomers } />
        </div>
        <div>
          <InputField
              type="number"
              name="pctDiscount"
              label="Discount (%)"
              value={ pctDiscount }
              onChangeValue={ this.handleChangePctDiscount } />
        </div>
        <div>
          <button
              disabled={ preventSubmit }
              onClick={ this.handleSubmitForm }>Submit</button>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    let { coupon } = nextProps
    let couponCode = ''
    let numberOfCustomers = ''
    let pctDiscount = ''

    if (coupon) {
      couponCode = coupon.couponCode
      numberOfCustomers = coupon.numberOfCustomers
      pctDiscount = coupon.pctDiscount
    }

    this.setState({ couponCode, numberOfCustomers, pctDiscount })
  }

  validateForm() {
    let { couponCode, numberOfCustomers } = this.state

    return numberOfCustomers > 0 && couponCode.length > 0
  }

  handleChangeCouponCode = (couponCode) => {
    this.setState({ couponCode })
  }

  handleChangeNumberOfCustomers = (numberOfCustomers) => {
    this.setState({ numberOfCustomers })
  }

  handleChangePctDiscount = (pctDiscount) => {
    this.setState({ pctDiscount })
  }

  handleSubmitForm = (e) => {
    if (!this.validateForm()) {
      //TODO: Add error indicator
      return
    }

    let data = Object.assign({}, this.state)
    let { coupon } = this.props
    
    if (coupon) {
      data.id = coupon.id
    }

    this.props.onSubmit(data)
  }
}

export default CouponPromotionForm