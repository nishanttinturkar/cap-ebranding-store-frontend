import {
  SELECT_HOME,
  SELECT_CATEGORIES,
  SELECT_CART,
  SELECT_ORDERS,
  SELECT_PROFILE,
  IS_LOGGED_IN,
} from "./CommonTypes";

export const selectHome = () => {
  return {
    type: SELECT_HOME,
  };
};

export const selectCategories = () => {
  return {
    type: SELECT_CATEGORIES,
  };
};

export const selectOrders = () => {
  return {
    type: SELECT_ORDERS,
  };
};

export const selectCart = () => {
  return {
    type: SELECT_CART,
  };
};

export const selectProfile = () => {
  return {
    type: SELECT_PROFILE,
  };
};

export const isLoggedIn = () => {
  return {
    type: IS_LOGGED_IN,
  };
};
