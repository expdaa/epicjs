const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var rSchema = new Schema({
    userOrigin : String,
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