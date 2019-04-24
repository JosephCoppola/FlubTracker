var models = require('../models');

var Player = models.Player;

var createPlayer = (req, res) => {
  console.log(req)
  
  var playerData = {
    name: req.body.name
  };
  
  var newPlayer = new Player.PlayerModel(playerData);
  console.log(newPlayer);
  
  newPlayer.save((err) => {
    if(err) {
      console.log(err);
      return res.status(400).json({error:"Couldn't create player"});
    }
    else {
      return res.status(200).json({error:"Success"}); 
    }
  });
};

module.exports.createPlayer = createPlayer;