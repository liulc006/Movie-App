import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
import movie from './movie';
import movieRating from './movieRating';
import users from './user';

const reducer = combineReducers({
  auth,
  cart,
  movie,
  movieRating,
  users,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './cart';
export * from './movie';
export * from './movieRating';
export * from './user';
