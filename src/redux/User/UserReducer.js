import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  ADD_USER_REQUEST,
  SEARCH_USERS_REQUEST,
  VALIDATE_USER_REQUEST,
  IS_INVALID_LOGIN,
  IS_ADMIN,
  IS_VENOR,
  IS_USER,
  IS_NOT_ADMIN,
} from "./UserTypes";

const initialState = {
  loading: false,
  users: [],
  user: {},
  error: "",
  login: false,
  admin: false,
  vendor: false,
};

const reducer = (state = initialState, action) => {
  //state transition n home comp updated
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        users: [...state.users, action.payload], //emp data
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload, //emp data
        loading: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case VALIDATE_USER_REQUEST:
      return {
        ...state,
        login: true,
      };
    case IS_ADMIN:
      return {
        ...state,
        admin: true,
        vendor: false,
      };
    case IS_VENOR:
      return {
        ...state,
        vendor: true,
        admin: false,
      };
    case IS_USER:
      return {
        ...state,
        vendor: false,
        admin: false,
      };
    case IS_INVALID_LOGIN:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default reducer;
