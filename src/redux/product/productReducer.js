import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, ADD_PRODUCTS_REQUEST  } from './productTypes'

const initialState = {
    loading: false,
    products: [],
    product: {},
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS_REQUEST:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}
export default productReducer