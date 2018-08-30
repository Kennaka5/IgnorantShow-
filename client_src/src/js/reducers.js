import { combineReducers } from 'redux';
import homeReducer from './containers/home/homeReducer';

const reducers = combineReducers({
  home: homeReducer,
});

export default reducers;