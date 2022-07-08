import OrderService from '../../Service/OrderService'
import { FETCH_ORDERITEMS_REQUEST, FETCH_ORDERITEMS_SUCCESS, FETCH_ORDERITEMS_FAILURE, ADD_ORDERITEMS_REQUEST  } from './orderItemTypes'

export const fetchOrderItemsRequest = () => {
    return {
        type: FETCH_ORDERITEMS_REQUEST
    }
}

export const fetchOrderItemsSuccess = orderItems => {
    return{
        type: FETCH_ORDERITEMS_SUCCESS,
        payload: orderItems
    }
}

export const fetchOrderItemsFailure = error => {
    return{
        type: FETCH_ORDERITEMS_FAILURE,
        payload: error
    }
}

export const addOrderItemsRequest = orderItems => {
    return {
        type: ADD_ORDERITEMS_REQUEST,
        payload: orderItems
    }
}

export const fetchOrderItems = () => {
    return (dispatch) => {
        let service =  new OrderService()
    service.getAllOrderItems() 
    .then ((response) => {
        const orderItems = response.data
        dispatch(fetchOrderItemsSuccess(orderItems))
    })
    .catch ((error) => {
        dispatch(fetchOrderItemsFailure(error.message))
    })
    }
}
export const addOrderItems = orderItems => {
    return (dispatch) => {
        let service = new OrderService()
        service.addOrderItems(orderItems)
        .then((response) => {
            const orderItems = response.data
            dispatch(addOrderItemsRequest(orderItems))
        })
        .catch((error) => {  
        })
    }
}