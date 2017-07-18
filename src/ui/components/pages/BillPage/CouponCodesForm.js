import React, { Component } from 'react'

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
        <div>
          <label>Coupon Code</label>
          <input
              onKeyPress={ this.handleKeyPress } />
        </div>
        <div>
          <CouponCodeList
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

class CouponCodeList extends Component {
  render() {
    let {
      coupons,
      onRemoveCouponCode,
      onIncreaseCouponCode,
      onDecreaseCouponCode
    } = this.props

    return (
      <ul>
        {
          coupons.map(appliedCoupon => (
            <CouponCode
                key={ appliedCoupon.couponCode }
                couponCode={ appliedCoupon.couponCode }
                total={ appliedCoupon.total }
                onRemoveCouponCode={ onRemoveCouponCode }
                onIncreaseCouponCode={ onIncreaseCouponCode }
                onDecreaseCouponCode={ onDecreaseCouponCode } />
          ))
        }
      </ul>
    )
  }
}

class CouponCode extends Component {
  render() {
    let { couponCode, total } = this.props

    return (
      <li>
        { couponCode }
        { total }
        <button
            onClick={ this.onClickIncrease }>+</button>
        <button
            onClick={ this.onClickDecrease }>-</button>
        <button
            onClick={ this.onClickRemove }>Remove</button>
      </li>
    )
  }

  onClickRemove = () => {
    let { couponCode, onRemoveCouponCode } = this.props
    onRemoveCouponCode(couponCode)
  }

  onClickIncrease = () => {
    let { couponCode, onIncreaseCouponCode } = this.props
    onIncreaseCouponCode(couponCode)
  }

  onClickDecrease = () => {
    let { couponCode, onDecreaseCouponCode } = this.props
    onDecreaseCouponCode(couponCode)
  }
}

export default CouponCodesForm