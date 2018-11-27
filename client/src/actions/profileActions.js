import axios from 'axios';
import { PROFILE_LOADING, GET_PROFILE } from './types';

// Get current user profile
export const getCurrentProfile = () => dispatch => {
  dispatch(profileLoading());
  axios.get('/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
}

// Sets profile loading to true
export const profileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
}
