import { FETCH_SHOPPINGCART_REQUEST, FETCH_SHOPPINGCART_SUCCESS, FETCH_SHOPPINGCART_FAILURE, ADD_SHOPPINGCART_REQUEST, GET_CART_BY_USER_ID } from './shoppingCartTypes'

const initialState = {
    loading: false,
    shoppingCarts: [],
    shoppingCart: {},
    error: ''
}

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOPPINGCART_REQUEST:
            return {
                ...state,
                shoppingCarts: [...state.shoppingCarts, action.payload]
            }
        case FETCH_SHOPPINGCART_SUCCESS:
            return {
                ...state,
                shoppingCarts: action.payload,
                loading: false
            }
        
            case FETCH_SHOPPINGCART_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_SHOPPINGCART_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        
        case GET_CART_BY_USER_ID:
            return{
                ...state,
                cart: action.payload,
                loading: false
            }

        default: return state
    }
}
export default shoppingCartReducer