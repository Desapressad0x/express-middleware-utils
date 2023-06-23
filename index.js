console.clear();

const express = require('express');
const middleware = require('./config');
const app = express();

const config = {
  "handler_404": {activated: false, msg: "404"},
  "404_file": {activated: false, file: "404.html"},
  "unique_values": {activated: false},
  "maintenance": {activated: false, msg: "tá em manutencaokkk"},
  "maintenance_file": {activated: false, file: "maintenance.html"}
}

app.use(middleware(config, app));

app.get('/', (req, res) => {
  res.send('oi');
})

app.listen(8080);
