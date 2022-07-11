import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import commonReducer from "./common/CommonReducer";
import cartNavSelector from "./Cart/cartReducer";
import roleReducer from "./Roles/RoleReducer";
import orderReducer from "./order/orderReducer";
import orderItemReducer from "./orderItems/orderItemReducer";
import addressReducer from "./Address/AddressReducer";
import paymentReducer from "./payment/paymentReducer";
import productReducer from "./product/productReducer";
import categoryReducer from "./category/categoryReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";
import shoppingCartItemReducer from "./shoppingCartItem/shoppingCartItemReducer";

const rootReducer = combineReducers({
  users: userReducer,
  navSelector: commonReducer,
  orders: orderReducer, //providing orders as a key to get the state
  orderItems: orderItemReducer,
  cartNavSelector: cartNavSelector,
  roles: roleReducer,
  address: addressReducer,
  payment: paymentReducer,
  products: productReducer,
  categories: categoryReducer,
  shoppingCarts: shoppingCartReducer,
  shoppingCartItems: shoppingCartItemReducer,
});

export default rootReducer;
