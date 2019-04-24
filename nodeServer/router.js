var controllers = require('./controllers');
var path = require('path');

var router = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../www/index.html'));
  });
  
  app.post("/createPlayer", controllers.Player.createPlayer);
};

module.exports = router;