
export default function articles(state = {articles: []}, action) {
    if (action.type === "GET_ARTICLES") {
        return {
            ...state,
            articles: action.payload,
        }
    }
    if (action.type === "GET_ARTICLE") {
        return {
            ...state,
            articles: action.payload,
        }
    }
    return state;
}
