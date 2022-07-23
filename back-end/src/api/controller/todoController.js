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
    const { id } = req.params;
    const { body } = req;
    await todoService.edit(body, id);

    res.sendStatus(204);
  },
  async delete(req, res) {
    const { id } = req.params;
    await todoService.delete(id);

    res.sendStatus(204);
  },
};

module.exports = todoController;