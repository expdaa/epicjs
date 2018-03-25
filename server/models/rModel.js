const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var rSchema = new Schema({
    userIP : String,
    intercept : Number,
    const : Number,
    coords : [
        {
            id : Number,
            x : Number,
            y : Number
        }
    ]
});

var Rmodels = mongoose.model('rmodels',rSchema); //name of the collection

module.exports = Rmodels;