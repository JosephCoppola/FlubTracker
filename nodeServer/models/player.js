var mongoose = require('mongoose');

var PlayerModel;

var PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  
  matchesWon: {
    type: Number,
    default: 0
  },
  
  totalMatches: {
    type: Number,
    default: 0
  },
  
  flubs: {
    type: Number,
    default: 0
  },
  
  createdDate: {
    type: Date,
    default: Date.now
  }
});

PlayerSchema.methods.toAPI = () => {
  return {
    _id: this._id
  }
};

PlayerSchema.statics.findPlayer = (playerName, callback) => {
  var search = {
    name: playerName
  };
  
  return PlayerModel.findOne(search).exec(callback);
};

PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports.PlayerSchema = PlayerSchema;
module.exports.PlayerModel = PlayerModel;