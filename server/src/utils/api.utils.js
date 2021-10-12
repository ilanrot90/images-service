const axios = require('axios');

const request = axios.create({
    headers: {
        'x-api-key': "api-key-4cefd85e-212d-43d1-8160-de393dfc3ffc"
    },
    baseURL: "https://api.jonathanczyzyk.com/api/v1/images",
    method: "GET"
})

module.exports = request;