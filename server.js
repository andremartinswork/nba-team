const express = require('express');
const next = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

// I18N
const GetPlayers = require('./src/requests/players');

// LIST
const List = require('./src/requests/list');

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  // GET I18N
  GetPlayers(server)

  // LIST
  List(server);

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})