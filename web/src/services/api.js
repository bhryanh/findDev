import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:33333'
});

export default api;