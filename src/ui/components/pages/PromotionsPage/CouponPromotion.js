import React, { Component } from 'react'
import CouponPromotionForm from './CouponPromotionForm'
import CouponPromotionList from './CouponPromotionList'

class CouponPromotion extends Component {
  state = {
    selectedCouponPromotion: null
  }

  render() {
    let { couponPromotions } = this.props
    let { selectedCouponPromotion } = this.state

    return (
      <div>
        <div>
          Promotions
          <button
              onClick={ this.handleAddCouponPromotion }>Add</button>
          <CouponPromotionForm
              coupon={ selectedCouponPromotion }
              onSubmit={ this.handleSubmitCouponPromotion } />
        </div>
        <CouponPromotionList
            couponPromotions={ couponPromotions }
            onDeleteCouponPromotion={ this.handleDeleteCouponPromotion }
            onEditCouponPromotion={ this.handleEditCouponPromotion } />
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    let { couponPromotions } = nextProps
    let { selectedCouponPromotion } = this.state

    if (selectedCouponPromotion) {
      let index = couponPromotions.findIndex(couponPromotion => couponPromotion.id === selectedCouponPromotion.id)
      
      if (index < 0) {
        this.clearSelectedCoupon()
      }
    }
  }

  loadCouponPromotionForm(id) {
    this.setSelectedCoupon(id)
  }

  setSelectedCoupon(id) {
    let { couponPromotions } = this.props
    let selectedCouponPromotion = this.getCouponPromotion(couponPromotions, id)

    this.setState({ selectedCouponPromotion })
  }

  clearSelectedCoupon() {
      console.log('*** clearSelectedCoupon')
    this.setSelectedCoupon(null)
  }

  getCouponPromotion(couponPromotions, id) {
    let couponPromotion = null

    if (id) {
      couponPromotion = couponPromotions.find(cp =>  cp.id === id)
    }

    return couponPromotion || null
  }

  handleAddCouponPromotion = () => {
    this.clearSelectedCoupon()
  }

  handleDeleteCouponPromotion = (id) => {
    let { onDeleteCouponPromotion } = this.props

    onDeleteCouponPromotion(id)
  }

  handleEditCouponPromotion = (id) => {
    this.setSelectedCoupon(id)
  }

  handleSubmitCouponPromotion = (data) => {
    let { selectedCouponPromotion } = this.state

    if (selectedCouponPromotion) {
      this.props.onUpdateCouponPromotion(selectedCouponPromotion.id, data)
    }
    else {
      this.props.onAddCouponPromotion(data)
    }

    this.clearSelectedCoupon()
  }
}

export default CouponPromotion