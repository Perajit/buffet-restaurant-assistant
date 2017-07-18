import BillPromotion from '../models/billPromotion'

const getAllBillPromotionsData = (conditions) => {
  return BillPromotion.find({})
}

const getBillPromotionDataById = (_id) => {
  return BillPromotion.findById(_id)
}

const addBillPromotionData = (data) => {
  console.log('*** addBillPromotionData', data)
  const billPromotion = new BillPromotion(data)
  return billPromotion.save()
}

const deleteBillPromotionData = (_id) => {
  return BillPromotion.findByIdAndRemove(_id)
}

const updateBillPromotionData = (_id, data) => {
  return BillPromotion.findByIdAndUpdate(_id, { $set: data }, { new: true })
}

export {
  getAllBillPromotionsData,
  getBillPromotionDataById,
  addBillPromotionData,
  deleteBillPromotionData,
  updateBillPromotionData
}