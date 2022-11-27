import axios from 'axios';

const clientApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default clientApi;