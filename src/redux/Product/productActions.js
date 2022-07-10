import ProductService from "../../service/ProductService";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCTS_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_SUCCESS,
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

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
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

export const getProductByIdRequest = (prod) => {
  return {
    type: GET_PRODUCT_BY_ID_REQUEST,
    payload: prod,
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

export const getProductById = (prodId) => {
  return (dispatch) => {
    let service = new ProductService();
    service
      .getProductsById(prodId)
      .then((response) => {
        const products = response.data;
        console.log(products);
        dispatch(fetchProductSuccess(products));
      })

      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
