import axios from 'axios';

const axiosConfig = {
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 5000,
};

export const apiClient = axios.create(axiosConfig);
