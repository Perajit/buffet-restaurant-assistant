import {
  getAllCouponPromotions,
  getCouponPromotionById,
  addCouponPromotion,
  deleteCouponPromotion,
  updateCouponPromotion
} from './controller'

const route = (app) => {
  app.get('/api/coupons', (...args) => {
    getAllCouponPromotions('coupons', ...args)
  })
  app.get('/api/coupons/:_id', (...args) => {
    getCouponPromotionById('coupon', ...args)
  })
  app.post('/api/coupons', (...args) => {
    addCouponPromotion('addedCoupon', ...args)
  })
  app.delete('/api/coupons/:_id', (...args) => {
    deleteCouponPromotion('deletedCoupon', ...args)
  })
  app.put('/api/coupons/:_id', (...args) => {
    updateCouponPromotion('updatedCoupon', ...args)
  })
}

export default route