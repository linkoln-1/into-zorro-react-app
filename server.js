const jsonServer = require("json-server");
const server = jsonServer.create("db.json");
const middlwares = jsonServer.default();
const PORT = 8000;


server.use(middlwares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});