const express = require('express');
const next = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const List = require('./src/requests/list');
const Detail = require('./src/requests/detail');
const Stats = require('./src/requests/stats');

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  List(server);
  Detail(server);
  Stats(server);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})