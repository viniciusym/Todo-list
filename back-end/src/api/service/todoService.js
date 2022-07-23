const { todo } = require('../../db/models');

const todoService = {
  async add(newTodo) {
    await todo.create(newTodo);
  },
  async getAll() {
    const todos = await todo.findAll();
    return todos;
  },
  async edit(todoChanges, id) {
    await todo.update(todoChanges, { where: { id } });
  },
  async delete(id) {
    await todo.destroy({ where: { id } });
  },
};

module.exports = todoService;