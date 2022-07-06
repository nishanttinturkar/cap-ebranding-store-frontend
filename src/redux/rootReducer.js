import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
