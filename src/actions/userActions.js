import axios from 'axios';
import customFetch from 'utils/axios';
import {API_URL} from 'constants/config.dev'
import * as types from 'constants/actionTypes';
import querystring from 'querystring';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from 'utils/setAuthorizationToken';

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
      const token = res.data.access_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
      return res;
    }).catch(err => {
      throw err;
    });
  };
}