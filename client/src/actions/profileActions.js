import axios from 'axios';
import { GET_PROFILE } from './types';

// Get current user profile
export const getCurrentProfile = () => dispatch => {
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
