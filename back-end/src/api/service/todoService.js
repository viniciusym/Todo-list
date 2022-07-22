const { todo } = require('../../db/models');

const todoService = {
  async add(newTodo) {
    await todo.create(newTodo);
  },
};

module.exports = todoService;