import ShoppingCartService from '../../service/ShoppingCartService'
import { FETCH_SHOPPINGCART_REQUEST, FETCH_SHOPPINGCART_SUCCESS, FETCH_SHOPPINGCART_FAILURE, ADD_SHOPPINGCART_REQUEST, GET_CART_BY_USER_ID } from './shoppingCartTypes'

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

export const getCart = cart => {
    return{
        type: GET_CART_BY_USER_ID,
        payload: cart
    }
}



export const fetchShoppingCart = () => {
    return (dispatch) => {
        let service =  new ShoppingCartService()
    service.getAllShoppingCart() 
    .then ((response) => {
        console.log("Response:", response)
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

export const getCartByUserId = (userId) => {
    return (dispatch) => {
        let service = new ShoppingCartService()
        service.getCartById(userId)
        .then((response) => {
            console.log ( "Response" + response);
            dispatch(getCart(response.data))
        })
        .catch((error) => {
            dispatch(fetchShoppingCartFailure(error.message))
        })
    }
}
