import mongoose, { Schema } from 'mongoose'
import Promise from 'bluebird'

mongoose.Promise = Promise;

const CouponPromotionSchema = new Schema({
  couponCode: { type: String, required: true, unique: true },
  numberOfCustomers: { type: Number, required: true },
  pctDiscount: { type: Number, required: true }
});

const promotionModel = mongoose.model('CouponPromotion', CouponPromotionSchema)

export default promotionModel