import { combineReducers } from 'redux';
import homeReducer from './containers/home/homeReducer';
import articleReducer from './containers/article/articleReducer';

const reducers = combineReducers({
  home: homeReducer,
  article: articleReducer
});

export default reducers;