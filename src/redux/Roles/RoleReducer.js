import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  DELETE_ROLE_REQUEST,
  UPDATE_ROLE_REQUEST,
  ADD_ROLE_REQUEST,
  SEARCH_ROLES_REQUEST,
} from "./RoleTypes";

const initialState = {
  loading: false,
  roles: [],
  role: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  //state transition n home comp updated
  switch (action.type) {
    case ADD_ROLE_REQUEST:
      return {
        ...state,
        roles: [...state.roles, action.payload], //emp data
      };
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        roles: [...state.roles, action.payload],
        loading: true,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload, //emp data
        loading: false,
      };
    case FETCH_ROLES_FAILURE:
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
