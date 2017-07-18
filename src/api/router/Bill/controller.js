import Promise from 'bluebird'
import { getAllBillPromotionsData } from '../../services/billPromotions'
import { getAllCouponPromotionsData } from '../../services/couponPromotions'
import { calculateNetBillAmount } from './calculator'

const calculateNetBill = (resultName, req, res) => {
  const conditions = req.body
  let promotions = {}

  getAllBillPromotionsData()
    .then(data => {
      promotions.billPromotions = data
      return getAllCouponPromotionsData()
    })
    .then(data => {
      promotions.couponPromotions = data

      res.json({
        status: true,
        [resultName]: calculateNetBillAmount(promotions, conditions)
      })
    })
}

export {
  calculateNetBill
}