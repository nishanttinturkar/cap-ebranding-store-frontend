import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import commonReducer from "./common/CommonReducer";
import cartNavSelector from "./Cart/cartReducer";

const rootReducer = combineReducers({
  users: userReducer,
  navSelector: commonReducer,
  cartNavSelector: cartNavSelector,
});

export default rootReducer;
