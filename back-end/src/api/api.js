const express = require('express');
const todoRoute = require('./router/todoRoute');

const api = express();

api.use(express.json());

api.use('/todo', todoRoute);

module.exports = api;