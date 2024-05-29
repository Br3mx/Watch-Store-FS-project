import { initialState as globalInitialState } from './initialState';

// Actions
const createActionName = (name) => `app/cart/${name}`;

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

const CART_STORAGE_KEY = 'cart';

// Funkcja do zapisu stanu koszyka do localStorage
const saveCartToLocalStorage = (cart) => {
  if (localStorage.getItem('cookieConsent') === 'true') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }
};

const loadCartFromLocalStorage = () => {
  if (localStorage.getItem('cookieConsent') === 'true') {
    const cartJSON = localStorage.getItem(CART_STORAGE_KEY);
    return cartJSON ? JSON.parse(cartJSON) : [];
  }
  return [];
};

// Stan początkowy koszyka (załadowany z localStorage lub globalInitialState)
const initialState = loadCartFromLocalStorage();

// Reducer
export default function reducer(state = initialState, action) {
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

export const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  saveCartToLocalStorage(state.cart);
  return result;
};
