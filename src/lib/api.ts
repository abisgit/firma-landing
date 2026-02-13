import axios from 'axios';

const getBaseURL = () => {
    const url = process.env.NEXT_PUBLIC_API_URL || 'https://firma-backend-vnj8.onrender.com';
    return url.endsWith('/') ? url.slice(0, -1) : url;
};

const api = axios.create({
    baseURL: getBaseURL(),
});

api.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
