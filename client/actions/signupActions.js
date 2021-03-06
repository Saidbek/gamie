import axios from 'axios';

export function userSignupRequest(userdData) {
  return dispatch => {
    return axios.post('/api/users', userdData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}