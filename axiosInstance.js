// src/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/freightgo-backend', // Update with your PHP backend path
});

export default api;
