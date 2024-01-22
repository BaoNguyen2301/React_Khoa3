import { combineReducers } from "redux";
import ToDoListReducer from "./ToDoListReducer";
import FakeBookReducer from './FakeBookReducer';
import BaiTapBauCuaReducer from './BaiTapBauCuaReducer';
export const rootReducer = combineReducers({
    ToDoListReducer,
    FakeBookReducer,
    BaiTapBauCuaReducer
})