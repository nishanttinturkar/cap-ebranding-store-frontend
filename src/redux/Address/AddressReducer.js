import {
  FETCH_ADDRESSS_REQUEST,
  FETCH_ADDRESSS_SUCCESS,
  FETCH_ADDRESSS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_REQUEST,
  ADD_ADDRESS_REQUEST,
  SEARCH_ADDRESSS_REQUEST,
} from "./AddressTypes";

const initialState = {
  loading: false,
  addresss: [],
  address: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  //state transition n home comp updated
  switch (action.type) {
    case ADD_ADDRESS_REQUEST:
      return {
        ...state,
        addresss: [...state.addresss, action.payload], //emp data
      };
    case FETCH_ADDRESSS_REQUEST:
      return {
        ...state,
        addresss: [...state.addresss, action.payload],
        loading: true,
      };
    case FETCH_ADDRESSS_SUCCESS:
      return {
        ...state,
        addresss: action.payload, //emp data
        loading: false,
      };
    case FETCH_ADDRESSS_FAILURE:
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
