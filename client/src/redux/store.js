import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productReducer from './productsRedux';
import favoriteReducer from './favoriteRedux';
import cartReducer from './cartRedux';
//import userReducer from './userRedux';

const subreducers = {
  products: productReducer,
  favorites: favoriteReducer,
  cart: cartReducer,
  //user: userReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;
