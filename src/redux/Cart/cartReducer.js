import {
  SELECT_SHOPPING_CART,
  SELECT_SHIPPOING_DETAILS,
  SELECT_PAYMENT_OPTIONS,
} from "./cartType";

const initialState = {
  cart: true,
  shipping: false,
  payment: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHOPPING_CART:
      return {
        ...state,
        cart: true,
        shipping: false,
        payment: false,
      };
    case SELECT_SHIPPOING_DETAILS:
      return {
        ...state,
        cart: false,
        shipping: true,
        payment: false,
      };
    case SELECT_PAYMENT_OPTIONS:
      return {
        ...state,
        cart: false,
        shipping: false,
        payment: true,
      };
    default:
      return state;
  }
};

export default reducer;
