var express = require('express');
var path = require('path');
const app = express();
const port = 3000;

var router = require('./router.js');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../www/index.html'));
});

app.use('/www', express.static(path.join(__dirname + '/../www')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
