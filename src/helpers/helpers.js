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

export const getCartProductsQuantity = (cartProducts) => {
  return cartProducts.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);
};

export const saveProductsToCache = (cartProducts) => {
  localStorage.setItem("cache", JSON.stringify(cartProducts));
};
