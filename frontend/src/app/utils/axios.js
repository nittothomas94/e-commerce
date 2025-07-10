import axios from 'axios';

const customisedAxios = axios.create({
  baseURL: 'https://e-commerce-backend-vjz7.onrender.com/api',
  timeout: 5000,
});

export default customisedAxios;

// http://localhost:8000/api
