import { API_URL } from '../config';
import axios from 'axios';

/* selectors */
export const getWatch = ({ products }) => products;
// actions
const createActionName = (name) => `app/products/${name}`;

export const LOAD_PROD = createActionName('LOAD_PROD');
export const ERROR = createActionName('ERROR');

export const loadProd = (payload) => ({ type: LOAD_PROD, payload });
export const setError = (payload) => ({ type: ERROR, payload });

// thunk

export const loadProdRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    dispatch(loadAds(res.data));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOAD_PROD:
      return { ...statePart, data: action.payload };
    case ERROR:
      return { ...statePart, error: action.payload };
    default:
      return statePart;
  }
}
