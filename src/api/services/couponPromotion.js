import CouponPromotion from '../models/couponPromotion'

const getAllCouponPromotionsData = (conditions) => {
  return CouponPromotion.find({})
}

const getCouponPromotionDataById = (_id) => {
  return CouponPromotion.findById(_id)
}

const addCouponPromotionData = (data) => {
  const couponPromotion = new CouponPromotion(data)
  return couponPromotion.save()
}

const deleteCouponPromotionData = (_id) => {
  return CouponPromotion.findByIdAndRemove(_id)
}

const updateCouponPromotionData = (_id, data) => {
  return CouponPromotion.findByIdAndUpdate(_id, { $set: data }, { new: true })
}

export {
  getAllCouponPromotionsData,
  getCouponPromotionDataById,
  addCouponPromotionData,
  deleteCouponPromotionData,
  updateCouponPromotionData
}