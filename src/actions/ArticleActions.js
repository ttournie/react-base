import axios from "axios";

// Get all the articles.
export function getArticles() {
    return function(dispatch) {
        axios.get("http://localhost:3001/api/articles")
        .then(res => {
          dispatch({type: "GET_ARTICLES", payload: res.data})
        })
    }
}

// Get all the articles.
export function saveArticles(article) {
    return function(dispatch) {
        axios.post("http://localhost:3001/api/articles", article)
        .then(res => {
          dispatch({type: "SAVE_ARTICLE", payload: res.data})
        })
    }
}

// Get all the articles.
export function getArticle(articleId) {
    return function(dispatch) {
        axios.get("http://localhost:3001/api/articles/" + articleId)
        .then(res => {
          dispatch({type: "GET_ARTICLE", payload: res.data})
        })
    }
}
