import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import commonReducer from "./common/CommonReducer";
import cartNavSelector from "./Cart/cartReducer";
import roleReducer from "./Roles/RoleReducer";
import addressReducer from "./Address/AddressReducer";
import paymentReducer from "./Payment/paymentReducer";
import productReducer from "./Product/productReducer";

const rootReducer = combineReducers({
  users: userReducer,
  navSelector: commonReducer,
  cartNavSelector: cartNavSelector,
  roles: roleReducer,
  address: addressReducer,
  payment: paymentReducer,
  products: productReducer,
});

export default rootReducer;
