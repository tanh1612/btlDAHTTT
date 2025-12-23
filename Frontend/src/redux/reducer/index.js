import { combineReducers } from "redux";
import { reducerArticle } from "./article";
import { reducerAuth } from "./auth";


export const allReducers = combineReducers({
    reducerArticle,
    reducerAuth
});