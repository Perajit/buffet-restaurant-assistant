import mongoose, { Schema } from 'mongoose'
import bluebird from 'bluebird'

mongoose.Promise = bluebird;

const CouponPromotionSchema = new Schema({
  code: { type: String, required: true, unique: true },
  numberOfCustomers: { type: Number, required: true },
  pctDiscount: { type: Number, required: true }
});

const promotionModel = mongoose.model('CouponPromotion', CouponPromotionSchema)

export default promotionModel