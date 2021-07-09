import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false, // This is the default
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});
http.interceptors.request.use(
  async config => config,
  error => Promise.reject(error),
);
http.interceptors.response.use(
  async config => config,
  error => Promise.reject(error.response),
);
export default http;
