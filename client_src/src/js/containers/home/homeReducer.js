import { types } from './homeActions'

const defaultState = {
articleList: null,
waiting: false
  };

  export default function homeReducer (state = defaultState, action) {
    const { type, payload } = action;
    // the `state = defaultState` above is new ES6 syntax
    // for defining a default value on a parameter
      switch (type) {
      
        case 'DISPLAY_ARTICLE_LIST_PENDING': {
          return {
            ...state,
            waiting: true
          }
        }

        case 'DISPLAY_ARTICLE_LIST_FULFILLED': {
          return {
            ...state,
            articleList: payload
          };
        }

  default: {
    return state;
  } 
}
}
