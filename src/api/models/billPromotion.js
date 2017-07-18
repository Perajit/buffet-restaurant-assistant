import mongoose, { Schema } from 'mongoose'
import Promise from 'bluebird'

mongoose.Promise = Promise;

const BillPromotionSchema = new Schema({
  billAmount: { type: Number, required: true, unique: true },
  pctDiscount: { type: Number, required: true },
  excludeOthers: { type: Boolean }
});

const promotionModel = mongoose.model('BillPromotion', BillPromotionSchema)

export default promotionModel