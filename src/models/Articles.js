var mongoose = require('mongoose');

// Create a new schema for our tweet data
var schema = new mongoose.Schema({
      title       : String
    , author     : String
    , body       : String
});

// Return a Articles model based upon the defined schema
module.exports = mongoose.model('Articles', schema);
