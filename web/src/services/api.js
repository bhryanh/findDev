import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:33334'
});

export default api;