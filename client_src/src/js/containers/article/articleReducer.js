import { types } from './articleActions'

const defaultState = {
choosenArticle: null,
choosenTopics: null,
waiting: false
  };

  export default function articleReducer (state = defaultState, action) {
    const { type, payload } = action;
    // the `state = defaultState` above is new ES6 syntax
    // for defining a default value on a parameter
      switch (type) {

        case 'DISPLAY_CHOOSEN_ARTICLE_PENDING': {
          return {
            ...state,
            waiting: true
          }
        }

        case 'DISPLAY_CHOOSEN_ARTICLE_FULFILLED': {
          return {
            ...state,
            choosenArticle: payload
          };
        }

        case 'DISPLAY_CHOOSEN_ARTICLE_TOPICS_PENDING': {
          return {
            ...state,
            waiting: true
          }
        }

        case 'DISPLAY_CHOOSEN_ARTICLE_TOPICS_FULFILLED': {
          return {
            ...state,
            choosenTopics: payload
          };
        }

  default: {
    return state;
  } 
}
}
