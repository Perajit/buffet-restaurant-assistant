import { calculateNetBill } from './controller'

const router = (app) => {
  app.post('/api/bill', (...args) => {
    calculateNetBill('netBillAmount', ...args)
  })
}

export default router