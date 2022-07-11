import {
    
    ADD_PAYMENT_REQUEST,
    FETCH_PAYMENTS_REQUEST,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE,
  SEARCH_PAYMENTS_REQUEST,

    
} from "./paymentTypes";

const initialState = {
    loading: false,
    payments: [],
    payment: {},
    error: "",
};

const reducer = (state = initialState, action) => {//state transition n home comp updated
    switch (action.type) {
        case ADD_PAYMENT_REQUEST:
      return {
        ...state,
        payments: [...state.payments, action.payload], //emp data
      };
    case FETCH_PAYMENTS_REQUEST:
      return {
        ...state,
        payments: [...state.payments, action.payload],
        loading: true,
      };
    case FETCH_PAYMENTS_SUCCESS:
      return {
        ...state,
        payments: action.payload, //emp data
        loading: false,
      };
    case FETCH_PAYMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
    }
   
 };
 export default reducer;
            