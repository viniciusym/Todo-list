const express = require('express');

const api = express();

api.use(express.json());

module.exports = api;