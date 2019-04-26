var models = require('../models');

var Player = models.Player;

var createPlayer = (req, res) => {
  var playerData = {
    name: req.body.name
  };
  
  var newPlayer = new Player.PlayerModel(playerData);
  
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

var updateMatchWon = (req, res) => {
  var player = req.body.name;
  var matchesWon = req.body.matchesWon;
  
  Player.PlayerModel.findPlayer(player, (err, record) => {
    if (record) {
      record.matchesWon = matchesWon;
      record.save();
      
      return res.status(200).json({});
    }
    else {
      return res.status(400).json({error:"User not found"});
    }
  });
};

var updateStats = (req, res) => {
  var updatedStats = req.body;
  
  Player.PlayerModel.findPlayer(updatedStats._id, (err, record) => {
    if(record) {
      record.matchesWon = updatedStats.matchesWon;
      record.totalMatches = updatedStats.totalMatches;
      record.flubs = updatedStats.flubs;
      record.name = updatedStats.name;
      
      record.save();
      
      return res.status(200).json({error:"Success"});
    }
    else {
      return res.status(400).json({error:"User not found"});
    }
  });
};

var getAllPlayers = (req, res) => {
  Player.PlayerModel.find({}).exec((err, docs) => {
    return res.status(200).json({players: docs});
  });
};

module.exports.createPlayer = createPlayer;
module.exports.updateMatchWon = updateMatchWon;
module.exports.updateStats = updateStats;
module.exports.getAllPlayers = getAllPlayers;