import initialState from './initialState';

const createActionName = (name) => `app/favorites/${name}`;
export const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
export const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');

export const addToFavorites = (product) => ({
  type: ADD_TO_FAVORITES,
  payload: product,
});

export const removeFromFavorites = (productId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: productId,
});

export default function reducer(state = [initialState], action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}
