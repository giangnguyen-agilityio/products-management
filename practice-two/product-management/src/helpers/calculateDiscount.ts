export const calculateDiscount = (
  oldPriceValue: number,
  newPriceValue: number
): number => {
  const calculatedDiscountValue =
    oldPriceValue > 0
      ? ((oldPriceValue - newPriceValue) / oldPriceValue) * 100
      : 0

  // Ensure that the calculated discount is non-negative
  const nonNegativeDiscount = Math.max(Math.round(calculatedDiscountValue), 0)
  return nonNegativeDiscount
}
