const PRICE_PER_PERSON = 459

function calculateNetBillAmount (promotions, conditions) {
  let { billPromotions, couponPromotions } = promotions
  let { totalCustomers, coupons } = conditions
  let fullBillAmount = totalCustomers * PRICE_PER_PERSON
  let couponDiscount = calculateCouponPromotionDiscount(couponPromotions, coupons, totalCustomers)

  return fullBillAmount - calculateMaxDiscount(billPromotions, fullBillAmount, couponDiscount)
}

function calculateMaxDiscount (billPromotions, fullBillAmount, couponDiscount) {
  let discountedBillAmount = fullBillAmount - couponDiscount
  let discountList = [couponDiscount]

  billPromotions.forEach((promotion) => {
    let billAmount = discountedBillAmount
    let index = 0

    if (promotion.excludeOthers) {
      billAmount = fullBillAmount
      index = discountList.length
    }

    let billDiscount = calculateBillPromotionDiscount(promotion, billAmount)

    discountList[index] = (discountList[index] || 0) + billDiscount
  })

  return Math.max(...discountList)
}

function calculateCouponPromotionDiscount(couponPromotions, coupons, totalCustomers) {
  let discount = 0

  coupons.forEach((coupon) => {
    let { couponCode, total } = coupon
    let promotion = couponPromotions.find(promotion => promotion.couponCode === couponCode)
    let totalApplicableCustomers = calculateTotalApplicableCustomers(total, totalCustomers, promotion.numberOfCustomers)

    discount += PRICE_PER_PERSON * totalApplicableCustomers * promotion.pctDiscount / 100
  })

  return discount
}

function calculateBillPromotionDiscount(promotion, billAmount) {
  let applicableBillAmount = calculateApplicableBillAmount(billAmount, promotion.billAmount)
  let discount = applicableBillAmount * promotion.pctDiscount / 100

  return discount
}

function calculateTotalApplicableCustomers(totalCoupons, totalCustomers, numberOfCustomersCondition) {
  return Math.min(totalCoupons * numberOfCustomersCondition, totalCustomers)
}

function calculateApplicableBillAmount(billAmount, billDiscountCondition) {
  return billAmount > billDiscountCondition ? billAmount : 0
}

export {
  calculateNetBillAmount
}