import {
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  ADD_ORDER_REQUEST,
  GET_ORDER_BY_USER_ID,
  GET_ITEMS_BY_ORDER_ID,
} from "./orderTypes";

const initialState = {
  loading: false,
  orders: [],
  order: [],
  items: [],
  error: "",
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER_REQUEST:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_ORDER_BY_USER_ID:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };
    case GET_ITEMS_BY_ORDER_ID:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default orderReducer;
