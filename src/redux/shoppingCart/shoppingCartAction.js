import ShoppingCartService from '../../service/ShoppingCartService'
import { FETCH_SHOPPINGCART_REQUEST, FETCH_SHOPPINGCART_SUCCESS, FETCH_SHOPPINGCART_FAILURE, ADD_SHOPPINGCART_REQUEST } from './shoppingCartTypes'

export const fetchShoppingCartRequest = () => {
    return {
        type: FETCH_SHOPPINGCART_REQUEST
    }
}

export const fetchShoppingCartSuccess = shoppingCart => {
    return{
        type: FETCH_SHOPPINGCART_SUCCESS,
        payload: shoppingCart
    }
}

export const fetchShoppingCartFailure = error => {
    return{
        type: FETCH_SHOPPINGCART_FAILURE,
        payload: error
    }
}

export const addShoppingCartRequest = shoppingCart => {
    return {
        type: ADD_SHOPPINGCART_REQUEST,
        payload: shoppingCart
    }
}



export const fetchShoppingCart = () => {
    return (dispatch) => {
        let service =  new ShoppingCartService()
    service.getAllShoppingCart() 
    .then ((response) => {
        const shoppingCarts = response.data
        dispatch(fetchShoppingCartSuccess(shoppingCarts))
    })
    .catch ((error) => {
        dispatch(fetchShoppingCartFailure(error.message))
    })
    }
}


export const addShoppingCart = ShoppingCart => {
    return (dispatch) => {
        let service = new ShoppingCartService()
        service.addShoppingCart(ShoppingCart)
        .then((response) => {
            const ShoppingCart = response.data
            dispatch(addShoppingCartRequest(ShoppingCart))
        })
        .catch((error) => {  
        })
    }
}
