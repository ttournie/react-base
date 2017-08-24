import axios from "axios";

// Get all the articles.
export function getArticles(tags) {
    return function(dispatch) {
        axios.get("http://localhost:3001/api/articles")
        .then(res => {
          dispatch({type: "GET_ARTICLES", payload: res.data})
        })
    }
}
