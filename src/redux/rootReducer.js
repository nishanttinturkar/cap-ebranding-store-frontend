import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";

const rootReducer = combineReducers({
  category: categoryReducer
});

export default rootReducer;
