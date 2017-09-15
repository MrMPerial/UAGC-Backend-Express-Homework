const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(5000, () => {
  console.log('Your app is listening on port 5000');
});

module.exports = app;
