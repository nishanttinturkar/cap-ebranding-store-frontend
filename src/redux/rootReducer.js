import { combineReducers } from "redux";
import paymentReducer from "./payment/paymentReducer";

const rootReducer = combineReducers({
  payment: paymentReducer
});

export default rootReducer;
