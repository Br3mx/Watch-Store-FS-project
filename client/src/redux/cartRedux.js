import initialState from './initialState';

// Actions
const createActionName = (name) => `app/products/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_PRODUCT_QUANTITY = createActionName('UPDATE_PRODUCT_QUANTITY');

// Action Creators
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const updateProductQuantity = (productId, quantity) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: { productId, quantity },
});

// Reducer
export default function reducer(state = [initialState], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      );
      if (existingProduct) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    case UPDATE_PRODUCT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload.productId
          ? { ...product, quantity: action.payload.quantity }
          : product,
      );
    default:
      return state;
  }
}
