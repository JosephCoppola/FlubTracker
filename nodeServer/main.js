var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var router = require('./router.js');
var bodyParser = require('body-parser');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port =  process.env.PORT || process.env.NODE_PORT || 3000;
const dbURL = process.env.MONGODB_URI;

var db = mongoose.connect(dbURL, {useNewUrlParser: true}, (err) => {
  if(err) {
    console.log("Failed to connect to mongo db");
    throw err;
  }
  else {
    console.log("Connected to mongo db");
  }
});

app.use('/www', express.static(path.join(__dirname + '/../www')));
app.use(bodyParser.json());

router(app);

http.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

io.on('connection', (socket) => {
  console.log("Socket connected");
  
  setInterval(() => io.emit('time', new Date().toTimeString()), 5000);
  
  socket.on('disconnect', function() {
    console.log("Socket disconnected");
  });
});
