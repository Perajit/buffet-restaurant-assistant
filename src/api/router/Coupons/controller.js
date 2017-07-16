import {
  getAllCouponPromotionsData,
  getCouponPromotionDataById,
  addCouponPromotionData,
  deleteCouponPromotionData,
  updateCouponPromotionData
} from '../../services/couponPromotion'

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

const getAllCouponPromotions = (resultName, req, res) => {
  wrapper(getAllCouponPromotionsData(), resultName, res)
}

const getCouponPromotionById = (resultName, req, res) => {
  const { _id } = req.params
  wrapper(getCouponPromotionDataById(_id), resultName, res)
}

const addCouponPromotion = (resultName, req, res) => {
  const data = req.body
  wrapper(addCouponPromotionData(data), resultName, res)
}

const deleteCouponPromotion = (resultName, req, res) => {
  const { _id } = req.params
  wrapper(deleteCouponPromotionData(_id), resultName, res)
}

const updateCouponPromotion = (resultName, req, res) => {
  const { _id } = req.params
  const data = req.body
  wrapper(updateCouponPromotionData(_id, data), resultName, res)
}

export {
  getAllCouponPromotions,
  getCouponPromotionById,
  addCouponPromotion,
  deleteCouponPromotion,
  updateCouponPromotion
}