import axios from 'axios';
import customFetch from 'utils/axios';
import {API_URL} from 'constants/config.dev'
import * as types from 'constants/actionTypes';
import querystring from 'querystring';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
}

export function signup(user) {
  return (dispatch) => {
    return axios({
      url: '/api/users',
      method: 'post',
      header: {
        'Content-type': 'application/json'
      },
      data: user
    });
  };
}

export function login(user) {
  return (dispatch) => {
    return axios.post(API_URL + '/authentication', querystring.stringify(user)).then(res => {
      dispatch(setCurrentUser(jwtDecode(res.data.access_token)));
    });
  };
}