const { Router } = require('express');
const todo = require('../../db/models/todo');
const todoController = require('../controller/todoController');

const todoRoute = Router();

todoRoute.post('/', todoController.add);
todoRoute.get('/', todoController.getAll);
todoRoute.put('/', todoController.edit);
todoRoute.delete('/', todoController.delete);

module.exports = todoRoute;