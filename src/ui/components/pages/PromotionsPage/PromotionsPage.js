import React, { Component } from 'react'
import CouponPromotionPanel from './CouponPromotionPanel'
import {
  PageHeader
} from 'react-bootstrap'

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
      <div className="container">
        <PageHeader>Promotions</PageHeader>
        <CouponPromotionPanel
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