import React, { Component } from 'react'
import TotalCustomersForm from './TotalCustomersForm'
import CouponCodesForm from './CouponCodesForm'
import {
  Panel,
  Row,
  Col,
  Button
} from 'react-bootstrap'

class BillFormPanel extends Component {
  state = {
    totalCustomers: '',
    coupons: []
  }

  render() {
    let { totalCustomers, coupons } = this.state
    let {
      changeTotalCustomers,
      attachCouponCode,
      detachCouponCode,
      removeCouponCode,
      reset,
      submit
    } = this
    let preventSubmit = !this.validateForm()

    return (
      <Panel
          header="Calculate Net Bill">
        <TotalCustomersForm
            totalCustomers={ totalCustomers }
            onChangeValue={ changeTotalCustomers } />
        <CouponCodesForm
            coupons={ coupons }
            onAddCouponCode={ attachCouponCode }
            onRemoveCouponCode={ removeCouponCode }
            onIncreaseCouponCode={ attachCouponCode }
            onDecreaseCouponCode={ detachCouponCode } />
        <Row className="show-grid">
          <Col xs={4} md={4} xsOffset={8} className="text-right">
            <Button
                onClick={ reset }>Reset</Button>
            <Button
                disabled={ preventSubmit }
                onClick={ submit }>Calculate</Button>
          </Col>
        </Row>
      </Panel>
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

  validateForm() {
    let { totalCustomers } = this.state

    return totalCustomers > 0
  }

  changeTotalCustomers = (totalCustomers) => {
    this.setState({ totalCustomers })
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
}

export default BillFormPanel