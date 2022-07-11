import { FETCH_SHOPPINGCARTITEM_REQUEST, FETCH_SHOPPINGCARTITEM_SUCCESS, FETCH_SHOPPINGCARTITEM_FAILURE, ADD_SHOPPINGCARTITEM_REQUEST, GET_CARTITEM_BY_ID_REQUEST, GET_TOTAL_PAYMENT  } from './shoppingCartItemTypes'

const initialState = {
    loading: false,
    shoppingCartItems: [],
    shoppingCartItem: {},
    error: '',
    totalPayment: 0
}

const shoppingCartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOPPINGCARTITEM_REQUEST:
            return {
                ...state,
                shoppingCartItems: [...state.shoppingCartItems, action.payload]
            }
        case FETCH_SHOPPINGCARTITEM_REQUEST:
            return {
                ...state,
                shoppingCartItems: [...state.shoppingCartItems, action.payload],
                loading: true
            }
        case FETCH_SHOPPINGCARTITEM_SUCCESS:
            return {
                ...state,
                shoppingCartItems: action.payload,
                loading: false
            }
        case FETCH_SHOPPINGCARTITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case GET_CARTITEM_BY_ID_REQUEST:
            return {
                ...state,
                cartItem: action.payload
            }
        case GET_TOTAL_PAYMENT:
            return {
                ...state,
                totalPayment: action.payload
            }
        default: return state
    }
}
export default shoppingCartItemReducer