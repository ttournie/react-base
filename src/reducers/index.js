import { combineReducers } from "redux";
import articles from "./ArticleReducer";

const reducer = combineReducers({
  articles
})

export default reducer;
