import {
  getAllBillPromotions,
  getBillPromotionById,
  addBillPromotion,
  deleteBillPromotion,
  updateBillPromotion
} from './controller'

const router = (app) => {
  app.get('/api/billPromotions', (...args) => {
    getAllBillPromotions('billPromotions', ...args)
  })
  app.get('/api/billPromotions/:_id', (...args) => {
    getBillPromotionById('billPromotion', ...args)
  })
  app.post('/api/billPromotions', (...args) => {
    addBillPromotion('addedBillPromotion', ...args)
  })
  app.delete('/api/billPromotions/:_id', (...args) => {
    deleteBillPromotion('deletedBillPromotion', ...args)
  })
  app.put('/api/billPromotions/:_id', (...args) => {
    updateBillPromotion('updatedBillPromotion', ...args)
  })
}

export default router