
import {
    ADD_CATEGORY_REQUEST,
    FETCH_CATEGORY_FAILURE,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    GET_CATEGORY_BY_ID,
    UPDATE_CATEGORY_REQUEST,
    DELETE_CATEGORY_REQUEST,

} from "./categoryTypes";

const initialState = {
    loading: false,
    categories: [],
    category: {},
    error: "",
};

const reducer = (state = initialState, action) => {//state transition n home comp updated
    switch (action.type) {
        case ADD_CATEGORY_REQUEST:
            return {
                ...state,
                categories: [...state.categories, action.payload],//emp data
            };
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                loading: true,
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload, //emp data
                loading: false,
            };
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                category: action.payload,
                loading: false,
            };
        case GET_CATEGORY_BY_ID:
            return {
                ...state,
                category: action.payload,
                loading: false,
            };
        case UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                category: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
