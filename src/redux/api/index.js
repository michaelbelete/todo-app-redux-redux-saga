import defaultAxios from 'axios';

export const axios = defaultAxios.create({
    baseUrl: 'http://localhost:8000/',
    headers: { 'Content-Type': 'application/json' }
});