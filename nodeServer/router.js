var controllers = require('./controllers');
var path = require('path');

var router = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../www/index.html'));
  });
  
  app.post("/createPlayer", controllers.Player.createPlayer);
  app.post("/updateMatchWon", controllers.Player.updateMatchWon);
  app.post("/updateStats", controllers.Player.updateStats);
  app.get("/getAllPlayers", controllers.Player.getAllPlayers);
  
  app.get("/socketPort", (req, res) => { return res.status(200).json({port: process.env.PORT || process.env.NODE_PORT || 3000})});
};

module.exports = router;