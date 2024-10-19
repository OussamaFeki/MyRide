// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3008',  // Replace with your actual NestJS API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
