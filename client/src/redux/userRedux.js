import axios from 'axios';
import { API_URL } from '../config';
import initialState from './initialState';

// SELECTORS
export const getUser = ({ user }) => (user ? user.data : null);
export const getUserError = ({ user }) => user.error;

// ACTION TYPES
const reducerName = 'user';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');
const SET_ERROR = createActionName('SET_ERROR');

// ACTION CREATORS
export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });
export const setError = (payload) => ({ type: SET_ERROR, payload });

// THUNKS
export const loadLoggedUser = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });
      dispatch(logIn({ login: res.data.login }));
    } catch (e) {
      console.log('error ', e);
    }
  };
};

export const logOutUser = () => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/auth/logout`, {
        withCredentials: true,
      });
      dispatch(logOut());
    } catch (e) {
      console.log('error ', e);
    }
  };
};

// REDUCER
export default function reducer(statePart = [initialState], action) {
  switch (action.type) {
    case LOG_IN:
      return { ...statePart, data: action.payload, error: null };
    case LOG_OUT:
      return { ...statePart, data: null, error: null };
    case SET_ERROR:
      return { ...statePart, error: action.payload };
    default:
      return statePart;
  }
}
