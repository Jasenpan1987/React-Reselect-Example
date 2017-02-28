import { combineReducers } from "redux";

import items from "./itemReducer";
import selectedItems from "./selectedReducer";

export default combineReducers({
    items,
    selectedItems
});