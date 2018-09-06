import axios from 'axios';


export function displayChoosenArticle(id) {
    return {
        type: "DISPLAY_CHOOSEN_ARTICLE",
        payload: axios.post('/choosenarticle', {id})
        .then((r) => {
            console.log("display choosen article ", r.data)
            return r.data
        })
        .catch((err) => {
            console.log( "choosen Article err", err.message)
        })
    };
}

export function displayChoosenArticleTopics(id) {
    return {
        type: "DISPLAY_CHOOSEN_ARTICLE_TOPICS",
        payload: axios.post('/choosentopic', {id})
        .then((r) => {
            console.log("display choosen topics", r.data)
            return r.data
        })
        .catch((err) => {
            console.log( "choosen Article err", err.message)
        })
    };
}