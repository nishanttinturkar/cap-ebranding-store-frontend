import {
  SELECT_HOME,
  SELECT_CATEGORIES,
  SELECT_CART,
  SELECT_ORDERS,
  SELECT_PROFILE,
  IS_LOGGED_IN,
} from "./CommonTypes";

const initialState = {
  home: true,
  categories: false,
  orders: false,
  cart: false,
  profile: false,
  login:
    localStorage.getItem("login") == null
      ? false
      : localStorage.getItem("login"),
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
        login:
          localStorage.getItem("login") == null
            ? false
            : localStorage.getItem("login"),
      };
    case SELECT_CATEGORIES:
      return {
        ...state,
        home: false,
        categories: true,
        orders: false,
        cart: false,
        profile: false,
        login:
          localStorage.getItem("login") == null
            ? false
            : localStorage.getItem("login"),
      };
    case SELECT_ORDERS:
      return {
        ...state,
        home: false,
        categories: false,
        orders: true,
        cart: false,
        profile: false,
        login:
          localStorage.getItem("login") == null
            ? false
            : localStorage.getItem("login"),
      };
    case SELECT_CART:
      return {
        ...state,
        home: false,
        categories: false,
        orders: false,
        cart: true,
        profile: false,
        login:
          localStorage.getItem("login") == null
            ? false
            : localStorage.getItem("login"),
      };
    case SELECT_PROFILE:
      return {
        ...state,
        home: false,
        categories: false,
        orders: false,
        cart: false,
        profile: true,
        login:
          localStorage.getItem("login") == null
            ? false
            : localStorage.getItem("login"),
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        home: false,
        categories: false,
        orders: false,
        cart: false,
        profile: true,
        login:
          localStorage.getItem("login") == null
            ? false
            : localStorage.getItem("login"),
      };
    default:
      return state;
  }
};

export default reducer;
