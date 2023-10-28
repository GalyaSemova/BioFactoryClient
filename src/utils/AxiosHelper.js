import axios from 'axios'
require('dotenv').config();

axios.defaults.baseURL = process.env.BASE_URL

axios.defaults.headers.post["Content-type"] = 'application.json'

export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data
    });
};
