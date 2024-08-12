import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
// const store = createStore(counterReducer)

const rootReducer = combineReducers({
    count: counterReducer,
    todo:todoReducer
  
})

export const store = createStore(rootReducer)