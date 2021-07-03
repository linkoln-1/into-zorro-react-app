const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const PORT = 8000;

server.get("/cafe", (req, res) => {
  const cafe = router.db.get("cafe");
  res.json(cafe);
});

server.get('/cafe/:id', (req, res) => {
  res.json(req.params.id);
})

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
