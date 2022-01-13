import axios from 'axios';

const api = axios.create({
    baseURL: 'api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow'
});

export default api;
