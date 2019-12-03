import news from "./news";
import items from "./items";

import {combineReducers} from "redux";
const reduces = combineReducers({
    news,items
})

export default reduces;