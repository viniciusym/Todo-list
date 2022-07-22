const todoService = require("../service/todoService");

const todoController = {
  async add(req, res) {
    const { body } = req;
    await todoService.add(body);

    res.sendStatus(201);
  },
  async getAll(_req, res) {
    const todos = await todoService.getAll();

    res.status(200).json(todos);
  },
  async edit(req, res) {
    const { body } = req;
    await todoService.edit(body);

    res.sendStatus(204);
  },
  async delete(req, res) {
    const { body } = req;
    await todoService.delete(body);

    res.sendStatus(204);
  },
};

module.exports = todoController;