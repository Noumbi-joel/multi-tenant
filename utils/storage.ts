export const setCheckoutCredentials = (
  transactionId: string,
  orderId: string,
  totalPrice: number,
  cartItemsIds: string[]
) => {
  localStorage.setItem("transactionId", transactionId);
  localStorage.setItem("orderId", orderId);
  localStorage.setItem("totalPrice", totalPrice.toString());
  localStorage.setItem("cartItemsIds", JSON.stringify(cartItemsIds));
  return;
};

export const getCheckoutCredentials = () => {
  const transactionId = localStorage.getItem("transactionId");
  const orderId = localStorage.getItem("orderId");
  const totalPrice = localStorage.getItem("totalPrice");
  const cartItemsIds = localStorage.getItem("cartItemsIds");
  return {
    transactionId,
    orderId,
    totalPrice,
    cartItemsIds,
  };
};

export const clearCheckoutCredentials = () => {
  return localStorage.clear();
};
