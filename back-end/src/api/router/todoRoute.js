const { Router } = require('express');
const todoController = require('../controller/todoController');

const todoRoute = Router();

todoRoute.post('/', todoController.add);

module.exports = todoRoute;