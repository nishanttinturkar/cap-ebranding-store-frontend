import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";

const rootReducer = combineReducers({
  categories: categoryReducer
});

export default rootReducer;
