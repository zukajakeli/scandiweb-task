export const getPriceBySelectedCurrency = (
  selectedCurrencyObject,
  pricesArray,
  quantity = 1
) => {
  const pricesObject = {};
  pricesArray.forEach((item) => {
    pricesObject[item.currency.label] = item.amount;
  });

  return (
    selectedCurrencyObject?.symbol +
    "" +
    (quantity * pricesObject[selectedCurrencyObject?.label])?.toFixed(2)
  );
};
