import { combineReducers } from 'redux'
import orderReducer from './order/orderReducer'
import orderItemReducer from './orderItems/orderItemReducer'
import productReducer from './product/productReducer'
import shoppingCartReducer from './shoppingCart/shoppingCartReducer'
import shoppingCartItemReducer from './shoppingCartItem/shoppingCartItemReducer'
import paymentReducer from "./payment/paymentReducer";
import addressReducer from "./Address/AddressReducer";

const rootReducer = combineReducers({
    orders: orderReducer, //providing orders as a key to get the state
    orderItems: orderItemReducer,
    products: productReducer,
    shoppingCarts: shoppingCartReducer,
    shoppingCartItems: shoppingCartItemReducer,
    payment: paymentReducer,
    address: addressReducer,
})                          //so with the help of orders key we will be able to access orders store
export default rootReducer