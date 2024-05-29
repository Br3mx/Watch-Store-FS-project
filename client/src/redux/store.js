import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productReducer from './productsRedux';
import favoriteReducer from './favoriteRedux';
import cartReducer from './cartRedux';
import { cartMiddleware } from './cartRedux';

const subreducers = {
  products: productReducer,
  favorites: favoriteReducer,
  cart: cartReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk, cartMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;
