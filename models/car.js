var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  carBody: String
});

module.exports = mongoose.model('Car', carSchema);
