import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(reducer, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));

export default rootStore;