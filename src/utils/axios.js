import axios from 'axios';

export default function customFetch(config) {
  return axios(config);
}