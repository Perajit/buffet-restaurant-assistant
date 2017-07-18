import React, { Component } from 'react'
import CouponPromotion from './CouponPromotion'

class PromotionsPage extends Component {
  render() {
    let {
      couponPromotions,
      onReloadPromotions,
      onAddCouponPromotion,
      onDeleteCouponPromotion,
      onUpdateCouponPromotion
    } = this.props

    return (
      <div>
        <CouponPromotion
          couponPromotions={ couponPromotions }
          onReloadPromotions={ onReloadPromotions }
          onAddCouponPromotion={ onAddCouponPromotion }
          onDeleteCouponPromotion={ onDeleteCouponPromotion }
          onUpdateCouponPromotion={ onUpdateCouponPromotion } />
      </div>
    )
  }
}

export default PromotionsPage