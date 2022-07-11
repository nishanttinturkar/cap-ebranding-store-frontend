import ShoppingCartService from '../../service/ShoppingCartService'
import { FETCH_SHOPPINGCARTITEM_REQUEST, FETCH_SHOPPINGCARTITEM_SUCCESS, FETCH_SHOPPINGCARTITEM_FAILURE, ADD_SHOPPINGCARTITEM_REQUEST, GET_CARTITEM_BY_ID_REQUEST, GET_TOTAL_PAYMENT  } from './shoppingCartItemTypes'

export const fetchShoppingCartItemRequest = () => {
    return {
        type: FETCH_SHOPPINGCARTITEM_REQUEST
    }
}

export const fetchShoppingCartItemSuccess = shoppingCartItems => {
    return{
        type: FETCH_SHOPPINGCARTITEM_SUCCESS,
        payload: shoppingCartItems
    }
}

export const fetchShoppingCartItemFailure = error => {
    return{
        type: FETCH_SHOPPINGCARTITEM_FAILURE,
        payload: error
    }
}

export const addShoppingCartItemRequest = shoppingCartItems => {
    return {
        type: ADD_SHOPPINGCARTITEM_REQUEST,
        payload: shoppingCartItems
    }
}

export const getCartItemByIdRequest = cartItem => {
    return {
        type: GET_CARTITEM_BY_ID_REQUEST,
        payload: cartItem,
    }
}

export const getTotalPayment = total => {
    return {
        type: GET_TOTAL_PAYMENT,
        payload: total,
    }
}

export const fetchShoppingCartItem = () => {
    return (dispatch) => {
        let service =  new ShoppingCartService()
    service.getAllShoppingCartItems() 
    .then ((response) => {
        const shoppingCartItems = response.data
        dispatch(fetchShoppingCartItemSuccess(shoppingCartItems))
    })
    .catch ((error) => {
        dispatch(fetchShoppingCartItemFailure(error.message))
    })
    }
}
export const addShoppingCartItem = (ShoppingCartItem) => {
    return (dispatch) => {
        let service = new ShoppingCartService()
        service.addShoppingCartItem(ShoppingCartItem)
        .then((response) => {
            alert("Item Added")
            const ShoppingCartItem = response.data
            dispatch(addShoppingCartItemRequest(ShoppingCartItem))
        })
        .catch((error) => {  
        })
    }
}

 export const getCartItemById = (cartId) => {
    return (dispatch) => {
        let service = new ShoppingCartService()
        service.getCartItemById(cartId)
        .then((response) => {
            const cartItems = response.data
            
            console.log("cartItems", cartItems)
            dispatch(fetchShoppingCartItemSuccess(cartItems))
        })
        .catch((error) => {
            dispatch(fetchShoppingCartItemFailure(error.message))
        })
    }
}
