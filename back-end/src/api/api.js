const express = require('express');
const todoRoute = require('./router/todoRoute');
const cors = require('cors');

const api = express();

api.use(express.json());
api.use(cors());

api.use('/todo', todoRoute);

module.exports = api;