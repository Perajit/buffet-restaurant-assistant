import React, { Component } from 'react'
import CouponPromotionPanelHeader from './CouponPromotionPanelHeader'
import CouponPromotionList from './CouponPromotionList'
import CouponPromotionFormModal from './CouponPromotionFormModal'
import {
  Panel
} from 'react-bootstrap'

class CouponPromotionPanel extends Component {
  state = {
    selectedCouponPromotion: null,
    shouldShowFormModal: false
  }

  render() {
    let { couponPromotions, onReloadPromotions, onDeleteCouponPromotion } = this.props
    let { selectedCouponPromotion, shouldShowFormModal } = this.state
    let { showCouponPromotionForm, hideFormModal, submitForm } = this

    return (
      <Panel
          header={
            <CouponPromotionPanelHeader
                onReloadPromotions={ onReloadPromotions }
                onShowCouponPromotionForm={ showCouponPromotionForm } />
          }>
        <CouponPromotionList
            couponPromotions={ couponPromotions }
            onDeleteCouponPromotion={ onDeleteCouponPromotion }
            onEditCouponPromotion={ showCouponPromotionForm } />
        <CouponPromotionFormModal
            couponPromotion={ selectedCouponPromotion }
            show={ shouldShowFormModal }
            onHide={ hideFormModal }
            onSubmit={ submitForm } />
      </Panel>
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

  showCouponPromotionForm = (id) => {
    let { couponPromotions } = this.props
    let selectedCouponPromotion = this.getCouponPromotion(couponPromotions, id)

    this.setState({ selectedCouponPromotion, shouldShowFormModal: true })
  }

  hideFormModal = () => {
    this.setState({ selectedCouponPromotion: null, shouldShowFormModal: false })
  }

  submitForm = (data) => {
    let { selectedCouponPromotion } = this.state

    if (selectedCouponPromotion) {
      this.props.onUpdateCouponPromotion(selectedCouponPromotion.id, data)
    }
    else {
      this.props.onAddCouponPromotion(data)
    }

    this.hideFormModal()
  }

  getCouponPromotion = (couponPromotions, id) => {
    let couponPromotion = null

    if (id) {
      couponPromotion = couponPromotions.find(cp =>  cp.id === id)
    }

    return couponPromotion || null
  }
}

export default CouponPromotionPanel