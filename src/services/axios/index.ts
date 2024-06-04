import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 90000,
});

export default API;
