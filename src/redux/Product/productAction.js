import ProductService from "../../service/ProductService";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCTS_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
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

export const deleteProductRequest = (catId) => {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: catId,
  };
};

export const updateProductRequest = (cat) => {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload: cat, //data from database
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
    console.log(products);
    service
      .addProducts(products)
      .then((response) => {
        alert("Product Added!");
        const products = response.data;
        dispatch(addProductsRequest(products));
      })
      .catch((error) => {
        console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrr", error.response.data);
      });
  };
};

export const getProductById = (prodId) => {
  return (dispatch) => {
    let service = new ProductService();
    service
      .getProductsById(prodId)
      .then((response) => {
        const products = response.data;
        console.log("Product", products);
        dispatch(fetchProductSuccess(products));
      })

      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const updateProduct = (cat) => {
  return (dispatch) => {
    let service = new ProductService();
    service
      .updateProduct(cat)
      .then((response) => {
        alert("Product Updated");
        let product = response.data;
        dispatch(updateProductRequest(cat)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        // dispatch(fetchUsersFailure(error.message));
      });
  };
};
export const deleteProduct = (catId) => {
  return (dispatch) => {
    let service = new ProductService();
    service
      .deleteProductById(catId)
      .then(() => {
        dispatch(deleteProductRequest(catId));
        service
          .getAllProducts()
          .then((response) => {
            alert("Product Deleted!");
            const products = response.data;
            dispatch(fetchProductSuccess(products)); //take action as parameter,reudcer is triggered
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
