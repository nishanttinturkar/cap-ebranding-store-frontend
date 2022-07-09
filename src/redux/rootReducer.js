import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import commonReducer from "./common/CommonReducer";
import cartNavSelector from "./Cart/cartReducer";
import roleReducer from "./Roles/RoleReducer";
import addressReducer from "./Address/AddressReducer";

const rootReducer = combineReducers({
  users: userReducer,
  navSelector: commonReducer,
  cartNavSelector: cartNavSelector,
  roles: roleReducer,
  address: addressReducer,
});

export default rootReducer;
