const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(5000, () => {
  console.log('Your app is listening on port 5000');
});

module.exports = app;
