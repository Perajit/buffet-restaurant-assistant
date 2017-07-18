import {
  getAllBillPromotionsData,
  getBillPromotionDataById,
  addBillPromotionData,
  deleteBillPromotionData,
  updateBillPromotionData
} from '../../services/billPromotions'

const wrapper = (query, resultName, res) => {
  query
    .then(data => {
      res.json({
        status: true,
        [resultName]: data
      })
    })
    .catch(err => {
      res.json({
        status: false,
        error: err.message
      })
    })
}

const getAllBillPromotions = (resultName, req, res) => {
  wrapper(getAllBillPromotionsData(), resultName, res)
}

const getBillPromotionById = (resultName, req, res) => {
  const { _id } = req.params
  wrapper(getBillPromotionDataById(_id), resultName, res)
}

const addBillPromotion = (resultName, req, res) => {
  const data = req.body
  wrapper(addBillPromotionData(data), resultName, res)
}

const deleteBillPromotion = (resultName, req, res) => {
  const { _id } = req.params
  wrapper(deleteBillPromotionData(_id), resultName, res)
}

const updateBillPromotion = (resultName, req, res) => {
  const { _id } = req.params
  const data = req.body
  wrapper(updateBillPromotionData(_id, data), resultName, res)
}

export {
  getAllBillPromotions,
  getBillPromotionById,
  addBillPromotion,
  deleteBillPromotion,
  updateBillPromotion
}