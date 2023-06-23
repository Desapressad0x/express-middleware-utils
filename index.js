console.clear();

const express = require('express');
const middleware = require('./config');
const app = express();

const config = {
  "handler_404": {activated: false, msg: "404"},
  "404_file": {activated: false, file: "404.html"},
  "unique_values": {activated: false},
  "manutencao": {activated: false, msg: "tá em manutencaokkk"},
  "manutencao_arquivo": {activated: false, file: "manu.html"}
}

app.use(middleware(config, app));

app.get('/', (req, res) => {
  res.send('oi');
})

app.listen(8080);
