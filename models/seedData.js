const RModel = require('./rModel.js');


module.exports = function() {

    var starterData = [
        {
            username : "ptrek",
            todo : "api"
        },
        {
            username : "rbur",
            todo : "fe"
        }
    ]


    RModel.collection.remove();

    RModel.create(starterData, function(err,results) {
        console.log(results);
    });


}