import ShoppingCartService from '../../service/ShoppingCartService'
import { FETCH_SHOPPINGCARTITEM_REQUEST, FETCH_SHOPPINGCARTITEM_SUCCESS, FETCH_SHOPPINGCARTITEM_FAILURE, ADD_SHOPPINGCARTITEM_REQUEST  } from './shoppingCartItemTypes'

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
export const addShoppingCartItem = ShoppingCartItem => {
    return (dispatch) => {
        let service = new ShoppingCartService()
        service.addShoppingCartItem(ShoppingCartItem)
        .then((response) => {
            const ShoppingCartItem = response.data
            dispatch(addShoppingCartItemRequest(ShoppingCartItem))
        })
        .catch((error) => {  
        })
    }
}