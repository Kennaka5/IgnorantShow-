import axios from 'axios';


export function displayArticleList() {
    console.log("display survey list")
    return {
        type: "DISPLAY_ARTICLE_LIST",
        payload: axios.post('/articlelist')
        .then((r) => {
            console.log("displyAction", r.data)
            return r.data
        })
        .catch((err) => {
            console.log( "Actions err", err.message)
        })
    };
}