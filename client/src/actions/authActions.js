import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, GET_ERRORS } from './types';

// Login user
export const loginUser = (userData, history) => dispatch => {
  console.log(userData, history);

  axios.post('/auth/login', userData)
    .then(res => {
      // Save to local storage
      const { token } = res.data;

      // Set token to local storage
      localStorage.setItem('jwtToken', token);

      // Set token to Auth header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decodedToken));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Set logged in user
export const setCurrentUser = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  };
}

// Log out current user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');

  // Remove auth header for future requests
  setAuthToken(false);

  // Set current user to {} which sets isAuthenticated to false
  dispatch(setCurrentUser({}));
}

// Register user
export const registerUser = (userData, history) => dispatch => {
  console.log(userData, history);

  axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}
