import {
  SELECT_HOME,
  SELECT_CATEGORIES,
  SELECT_CART,
  SELECT_ORDERS,
  SELECT_PROFILE,
  SELECT_LOGIN,
} from "./CommonTypes";

const initialState = {
  home: true,
  categories: false,
  orders: false,
  cart: false,
  profile: false,
  login: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_HOME:
      return {
        ...state,
        home: true,
        categories: false,
        orders: false,
        cart: false,
        profile: false,
        login: false,
      };
    case SELECT_CATEGORIES:
      return {
        ...state,
        home: false,
        categories: true,
        orders: false,
        cart: false,
        profile: false,
        login: false,
      };
    case SELECT_ORDERS:
      return {
        ...state,
        home: false,
        categories: false,
        orders: true,
        cart: false,
        profile: false,
        login: false,
      };
    case SELECT_CART:
      return {
        ...state,
        home: false,
        categories: false,
        orders: false,
        cart: true,
        profile: false,
        login: false,
      };
    case SELECT_PROFILE:
      return {
        ...state,
        home: false,
        categories: false,
        orders: false,
        cart: false,
        profile: true,
        login: false,
      };
    case SELECT_LOGIN:
      return {
        ...state,
        home: false,
        categories: false,
        orders: false,
        cart: false,
        profile: false,
        login: true,
      };
    default:
      return state;
  }
};

export default reducer;
