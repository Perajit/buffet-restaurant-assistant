import React, { Component } from 'react'

class CouponPromotionList extends Component {
  render() {
    let {
      couponPromotions,
      onDeleteCouponPromotion,
      onEditCouponPromotion
    } = this.props

    return (
      <ul>
        {
          couponPromotions.map(couponPromotion => (
            <CouponPromotion
              key={ couponPromotion.id }
              id={ couponPromotion.id }
              couponCode={ couponPromotion.couponCode }
              onDelete={ onDeleteCouponPromotion }
              onEdit={ onEditCouponPromotion } />
          ))
        }
      </ul>
    )
  }
}

class CouponPromotion extends Component {
  render() {
    const {
      id,
      couponCode,
      onDelete,
      onEdit
    } = this.props

    return (
      <li>
        { couponCode }
        <button
            onClick={ e => onDelete(id) }>Remove</button>
        <button
            onClick={ e => onEdit(id) }>Edit</button>
      </li>
    )
  }
}

export default CouponPromotionList