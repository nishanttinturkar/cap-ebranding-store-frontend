import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  ADD_USER_REQUEST,
  SEARCH_USERS_REQUEST,
} from "./UserTypes";

const initialState = {
  loading: false,
  users: [],
  user: {},
  error: "",
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
    default:
      return state;
  }
};

export default reducer;
