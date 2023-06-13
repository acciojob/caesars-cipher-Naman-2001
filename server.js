const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.send("Hello world");
});
