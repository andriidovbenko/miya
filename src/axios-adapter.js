const axios = require('axios');

const adapter = axios.create({
  baseURL: 'http://127.0.0.1:3000/'
});

adapter.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export default adapter;