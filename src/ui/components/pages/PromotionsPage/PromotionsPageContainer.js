import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import PromotionsPage from './PromotionsPage'
import { COUPON_PROMOTIONS_ENDPOINT } from '../../../constants/endpoints'

class PromotionsPageContainer extends Component {
  state = {
    couponPromotions: []
  }

  componentDidMount() {
    this.reloadCouponPromotions()
  }

  render() {
    let { couponPromotions } = this.state

    return (
      <PromotionsPage
          couponPromotions={ couponPromotions }
          onReloadPromotions={ this.reloadCouponPromotions }
          onAddCouponPromotion={ this.addCouponPromotion }
          onDeleteCouponPromotion={ this.deleteCouponPromotion }
          onUpdateCouponPromotion={ this.updateCouponPromotion } />
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { couponPromotions } = this.state
    let isCouponPromotionsUpdated = couponPromotions !== nextState.couponPromotions

    return isCouponPromotionsUpdated
  }

  reloadCouponPromotions = () => {
    const url = COUPON_PROMOTIONS_ENDPOINT

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let couponPromotions = data.couponPromotions.map(coupon => {
          return {
            id: coupon._id,
            couponCode: coupon.couponCode,
            numberOfCustomers: coupon.numberOfCustomers,
            pctDiscount: coupon.pctDiscount
          }
        })

        this.setState({ couponPromotions })
      })
  }

  addCouponPromotion = (data) => {
    const url = COUPON_PROMOTIONS_ENDPOINT

    fetch(COUPON_PROMOTIONS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          this.reloadCouponPromotions()
        }
        else {
          console.log('*** failed to add')
        }
      })
  }

  deleteCouponPromotion = (id) => {
    const url = `${COUPON_PROMOTIONS_ENDPOINT}/${id}`

    fetch(url, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          this.reloadCouponPromotions()
        }
        else {
          console.log('*** failed to delete')
        }
      })
  }

  updateCouponPromotion = (id, data) => {
    const url = `${COUPON_PROMOTIONS_ENDPOINT}/${id}`

    fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          this.reloadCouponPromotions()
        }
        else {
          console.log('*** failed to update')
        }
      })
  }
}

export default PromotionsPageContainer