import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://6c25-105-73-96-62.ngrok-free.app/',
  baseURL: 'http://localhost:5000',
  
});

export default axiosInstance;