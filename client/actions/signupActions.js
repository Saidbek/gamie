import axios from 'axios';

export function userSignupRequest(userdData) {
  return dispatch => {
    return axios.post('/api/users', userdData);
  }
}