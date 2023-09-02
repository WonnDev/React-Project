import { combineReducers } from "redux";
import handleCart from "./handleCart";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  handleCart,
  user: userReducer,
});

export default rootReducers;
