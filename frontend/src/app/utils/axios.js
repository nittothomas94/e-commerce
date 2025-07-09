import axios from 'axios';

const customisedAxios = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 5000,
});

export default customisedAxios;
