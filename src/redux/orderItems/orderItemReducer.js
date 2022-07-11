import { FETCH_ORDERITEMS_REQUEST, FETCH_ORDERITEMS_SUCCESS, FETCH_ORDERITEMS_FAILURE, ADD_ORDERITEMS_REQUEST  } from './orderItemTypes'

const initialState = {
    loading: false,
    orderItems: [],
    orderItem: {},
    error: ''
}

const orderItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDERITEMS_REQUEST:
            return {
                ...state,
                orderItems: [...state.orderItems, action.payload]
            }
        case FETCH_ORDERITEMS_REQUEST:
            return {
                ...state,
                orderItems: [...state.orderItems, action.payload],
                loading: true
            }
        case FETCH_ORDERITEMS_SUCCESS:
            return {
                ...state,
                orderItems: action.payload,
                loading: false
            }
        case FETCH_ORDERITEMS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}
export default orderItemReducer