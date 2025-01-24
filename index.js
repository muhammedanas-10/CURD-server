const jsonServer = require('json-server');

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
const PORT = 3000;
const route = jsonServer.router('db.json');

server.use(middlewares);
server.use(route);

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});