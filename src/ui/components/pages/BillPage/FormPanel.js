import React, { Component } from 'react'
import TotalCustomersForm from './TotalCustomersForm'
import CouponCodesForm from './CouponCodesForm'
import FormControls from './FormControls'

class FormPanel extends Component {
  state = {
    totalCustomers: '',
    coupons: []
  }

  render() {
    let { totalCustomers, coupons } = this.state

    return (
      <div>
        <TotalCustomersForm
            totalCustomers={ totalCustomers }
            onChangeValue={ this.handleChangeTotalCustomers } />
        <CouponCodesForm
            coupons={ coupons }
            onAddCouponCode={ this.attachCouponCode }
            onRemoveCouponCode={ this.removeCouponCode }
            onIncreaseCouponCode={ this.attachCouponCode }
            onDecreaseCouponCode={ this.detachCouponCode } />
        <FormControls
            onReset={ this.reset }
            onSubmit={ this.submit } />
      </div>
    )
  }

  reset = () => {
    let totalCustomers = ''
    let coupons = []

    this.setState({ totalCustomers, coupons })
  }

  submit = () => {
    let { onSubmitForm } = this.props
    let data = this.state

    onSubmitForm(data)

    this.reset()
  }

  changeTotalCoupons = (couponCode, diff) => {
    let coupons = this.state.coupons.slice()
    let coupon = coupons.find(appliedCoupon => appliedCoupon.couponCode === couponCode)

    if (coupon) {
      let newTotal = coupon.total + diff

      if (newTotal < 1) {
        let index = coupons.indexOf(coupon)
        coupons.splice(index, 1)
      }

      coupon.total = newTotal
    }
    else {
      coupons.push({ couponCode, total: 1 })
    }

    this.setState({ coupons })
  }

  attachCouponCode = (couponCode) => {
    this.changeTotalCoupons(couponCode, 1)
  }

  detachCouponCode = (couponCode) => {
    this.changeTotalCoupons(couponCode, -1)
  }

  removeCouponCode = (couponCode) => {
    let coupons = this.state.coupons.filter(appliedCoupon => appliedCoupon.couponCode !== couponCode)

    this.setState({ coupons })
  }

  handleChangeTotalCustomers = (totalCustomers) => {
    this.setState({ totalCustomers })
  }
}

export default FormPanel