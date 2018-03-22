const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var rSchema = new Schema({
    username : String,
    todo : String
});

var Rmodels = mongoose.model('Rmodels',rSchema);

module.exports = Rmodels;