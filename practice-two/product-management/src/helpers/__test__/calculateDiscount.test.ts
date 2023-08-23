import { calculateDiscount } from '../calculateDiscount'

describe('calculateDiscount function', () => {
  it('should return 0 discount when old price is 0', () => {
    const oldPrice = 0
    const newPrice = 100
    const discount = calculateDiscount(oldPrice, newPrice)
    expect(discount).toBe(0)
  })

  it('should return 0 discount when old price is negative', () => {
    const oldPrice = -50
    const newPrice = 25
    const discount = calculateDiscount(oldPrice, newPrice)
    expect(discount).toBe(0)
  })

  it('should calculate the discount correctly for positive values', () => {
    const oldPrice = 200
    const newPrice = 150
    const discount = calculateDiscount(oldPrice, newPrice)
    expect(discount).toBe(25) // (200 - 150) / 200 * 100 = 25
  })

  it('should round down the discount to the nearest integer', () => {
    const oldPrice = 100
    const newPrice = 80
    const discount = calculateDiscount(oldPrice, newPrice)
    expect(discount).toBe(20) // (100 - 80) / 100 * 100 = 20
  })

  it('should handle new price larger than old price', () => {
    const oldPrice = 150
    const newPrice = 200
    const discount = calculateDiscount(oldPrice, newPrice)
    expect(discount).toBe(0) // New price is larger, discount should be 0
  })
})
