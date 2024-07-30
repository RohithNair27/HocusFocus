import { combineReducers, Redux, createStore } from "redux";
import { commonReducer } from "./commonReducer/commonReducer";
import { TaskReducer } from "./TaskReducer/taskReducer";
const combinedReducers = combineReducers({
  commonReducer,
  TaskReducer,
});
export const store = createStore(combinedReducers);
