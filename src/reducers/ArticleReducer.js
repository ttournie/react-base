
export default function articles(state = {articles: []}, action) {
    if (action.type === "GET_ARTICLES") {
        return {
            ...state,
            articles: action.payload,
        }
    }
    return state;
}
