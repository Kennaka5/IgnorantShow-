import axios from 'axios';

export const types = {
    MOVIE_INFO: 'MOVIE_INFO',
    MOVIE_INPUT: 'MOVIE_INPUT'
}

export function inputMovie(inputTitle){
return {
type: types.MOVIE_INPUT,
payload: {inputTitle}
};
}

export function movieSearchQuery(movies) {
    return {
    type: types.MOVIE_INFO,
    payload: axios.get('https://www.omdbapi.com/?apikey=8730e0e&s=' + movies)
    .then((r) => { 
        console.log('ActionRequest:', r.data)
        return r.data.Search
    })
    .catch((err) => { 
        console.log(err)
        })}
}