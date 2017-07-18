import BillRouter from './Bill'
import BillPromotionsRouter from './BillPromotions'
import CouponPromotionsRouter from './CouponPromotions'

const router = (app) => {
  BillRouter(app)
  BillPromotionsRouter(app)
  CouponPromotionsRouter(app)
}

export default router