import {
  SELECT_SHOPPING_CART,
  SELECT_SHIPPOING_DETAILS,
  SELECT_PAYMENT_OPTIONS,
} from "./cartType";

export const selectShoppingCart = () => {
  return {
    type: SELECT_SHOPPING_CART,
  };
};

export const selectShippingDetails = () => {
  return {
    type: SELECT_SHIPPOING_DETAILS,
  };
};

export const selectPaymentOptions = () => {
  return {
    type: SELECT_PAYMENT_OPTIONS,
  };
};