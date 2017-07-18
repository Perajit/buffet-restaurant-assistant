import {
  getAllCouponPromotions,
  getCouponPromotionById,
  addCouponPromotion,
  deleteCouponPromotion,
  updateCouponPromotion
} from './controller'

const router = (app) => {
  app.get('/api/couponPromotions', (...args) => {
    getAllCouponPromotions('couponPromotions', ...args)
  })
  app.get('/api/couponPromotions/:_id', (...args) => {
    getCouponPromotionById('couponPromotion', ...args)
  })
  app.post('/api/couponPromotions', (...args) => {
    addCouponPromotion('addedCouponPromotion', ...args)
  })
  app.delete('/api/couponPromotions/:_id', (...args) => {
    deleteCouponPromotion('deletedCouponPromotion', ...args)
  })
  app.put('/api/couponPromotions/:_id', (...args) => {
    updateCouponPromotion('updatedCouponPromotion', ...args)
  })
}

export default router