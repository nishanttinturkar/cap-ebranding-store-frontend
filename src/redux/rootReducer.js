import { combineReducers } from 'redux'
import orderReducer from './order/orderReducer'
import orderItemReducer from './orderItems/orderItemReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
    orders: orderReducer, //providing orders as a key to get the state
    orderItems: orderItemReducer,
    products: productReducer
})                          //so with the help of orders key we will be able to access orders store
export default rootReducer