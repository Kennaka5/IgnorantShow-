import { types } from './homeActions'

const defaultState = {
results: [],
inputTitle: ''
  };

  export default function homeReducer (state = defaultState, action) {
    const { type, payload } = action;
    // the `state = defaultState` above is new ES6 syntax
    // for defining a default value on a parameter
      switch (type) {
      
      case types.MOVIE_INPUT: 

  default: {
    return state;
  } 
}
}
