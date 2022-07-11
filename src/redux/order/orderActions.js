import OrderService from '../../service/OrderService'
import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE, ADD_ORDER_REQUEST, GET_ORDER_BY_USER_ID  } from './orderTypes'

export const fetchOrdersRequest = () => {
    return {
        type: FETCH_ORDERS_REQUEST
    }
}

export const fetchOrdersSuccess = orders => {
    return{
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFailure = error => {
    return{
        type: FETCH_ORDERS_FAILURE,
        payload: error
    }
}

export const addOrderRequest = order => {
    return {
        type: ADD_ORDER_REQUEST,
        payload: order
    }
}

export const getOrder = order => {
    return{
        type: GET_ORDER_BY_USER_ID,
        payload: order,
    }
}

export const fetchOrders = () => {
    return (dispatch) => {
        let service =  new OrderService()
    service.getAllOrders() 
    .then ((response) => {
        const orders = response.data
        dispatch(fetchOrdersSuccess(orders))
    })
    .catch ((error) => {
        dispatch(fetchOrdersFailure(error.message))
    })
    }
}
export const addOrder = order => {
    return (dispatch) => {
        let service = new OrderService()
        service.addOrder(order)
        .then((response) => {
            const order = response.data
            dispatch(addOrderRequest(order))
        })
        .catch((error) => {  
        })
    }
}

export const getOrderByUserId = (userId) => {
    return (dispatch) => {
        let service = new OrderService()
        service.getOrderById(userId)
        .then((response)=> {
            console.log("Response: " + response);
            dispatch(getOrder(response.data))
        })
        .catch((error) => {
            dispatch(fetchOrdersFailure(error.message))
        })
    }
}