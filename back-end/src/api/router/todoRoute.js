const { Router } = require('express');
const todo = require('../../db/models/todo');
const todoController = require('../controller/todoController');

const todoRoute = Router();

todoRoute.post('/', todoController.add);
todoRoute.get('/', todoController.getAll);
todoRoute.put('/:id', todoController.edit);
todoRoute.delete('/:id', todoController.delete);

module.exports = todoRoute;