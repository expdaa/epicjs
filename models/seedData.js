const RModel = require('./rModel.js');


module.exports = function() {

    var starterData = [
        {
            userOrigin : "Seattle",
            intercept : 2.2235,
            const : 4.6677,
            coords : [
                {
                    id : 1,
                    x : 34,
                    y : 55
                },
                {
                    id : 2,
                    x : 74,
                    y : 91
                }
            ]
        }
    ]



    RModel.collection.remove(); //empty the collection

    RModel.create(starterData, function(err,results) { //load the data
        console.log(JSON.stringify(results));
    });


}