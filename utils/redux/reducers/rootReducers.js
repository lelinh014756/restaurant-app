import { combineReducers } from "redux";
import informationReducer from "../reducers/informationReducer";
import changeReducer from "../reducers/changeReducer";

const rootReducers = combineReducers({
  change: changeReducer,
  information: informationReducer,
});

export default rootReducers;
