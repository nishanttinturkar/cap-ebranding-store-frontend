import ProductService from "../../service/ProductService";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCTS_REQUEST,
} from "./productTypes";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const addProductsRequest = (products) => {
  return {
    type: ADD_PRODUCTS_REQUEST,
    payload: products,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    let service = new ProductService();
    service
      .getAllProducts()
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
export const addProducts = (products) => {
  return (dispatch) => {
    let service = new ProductService();
    service
      .addProducts(products)
      .then((response) => {
        const products = response.data;
        dispatch(addProductsRequest(products));
      })
      .catch((error) => {});
  };
};
