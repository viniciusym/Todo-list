const api = require("./api/api");

const PORT = process.env.PORT;

api.listen(PORT, () => {
  console.log(`api listening port ${PORT}`);
})