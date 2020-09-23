import axios from 'axios';

const api = axios.create({
    baseURL: 'http://dog.ceo/api/breed/',
});

export default api;