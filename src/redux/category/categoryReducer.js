import {

    ADD_CATEGORY_REQUEST, 
    FETCH_CATEGORY_FAILURE, 
    FETCH_CATEGORY_REQUEST, 
    FETCH_CATEGORY_SUCCESS,

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
        default:
            return state;
    }
};
export default reducer;
