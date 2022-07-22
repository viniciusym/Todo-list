const todoService = require("../service/todoService");

const todoController = {
  async add(req, res) {
    const { body } = req;
    await todoService.add(body);

    res.sendStatus(201);
  },
};

module.exports = todoController;