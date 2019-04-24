var mongoose = require('mongoose');

var PlayerModel;

var PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
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

PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports.PlayerSchema = PlayerSchema;
module.exports.PlayerModel = PlayerModel;