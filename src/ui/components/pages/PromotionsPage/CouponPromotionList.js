import React, { Component } from 'react'
import CouponPromotionListItem from './CouponPromotionListItem'
import {
  ListGroup
} from 'react-bootstrap'

class CouponPromotionList extends Component {
  render() {
    let {
      couponPromotions,
      onDeleteCouponPromotion,
      onEditCouponPromotion
    } = this.props

    return (
      <ListGroup>
        {
          couponPromotions.map(couponPromotion => (
            <CouponPromotionListItem
              key={ couponPromotion.id }
              id={ couponPromotion.id }
              couponCode={ couponPromotion.couponCode }
              onDelete={ onDeleteCouponPromotion }
              onEdit={ onEditCouponPromotion } />
          ))
        }
      </ListGroup>
    )
  }
}

export default CouponPromotionList