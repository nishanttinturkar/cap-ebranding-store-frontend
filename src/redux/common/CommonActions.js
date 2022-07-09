import {
  SELECT_HOME,
  SELECT_CATEGORIES,
  SELECT_CART,
  SELECT_ORDERS,
  SELECT_PROFILE,
  SELECT_LOGIN,
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

export const selectLogin = () => {
  return {
    type: SELECT_LOGIN,
  };
};
