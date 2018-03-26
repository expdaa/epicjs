'use strict';

const bodyParser = require('body-parser');
const RModel = require('../models/rModel.js');

module.exports = function (app,path,dirname) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/persistlm', (req, res) => {

        // console.log("body from the request");
         console.log(req.body);
         console.log(req.connection.remoteAddress);

        var starterData = [
            {
                userIP : req.connection.remoteAddress,
                intercept : null,
                const : null,
                coords : req.body
            }
        ]

        RModel.create(starterData, function(err,results) { //persist in the db
            console.log(JSON.stringify(results));
            console.log("id created:" + results[0]._id);

            res.status(200);
            res.send({
                msg: "Success! Data persisted in MongoDB.",
                documentId : results[0]._id
            })
        });


        
    });


    app.get('/findall', (req,res) => {

        RModel.find({}, function(err,results){ 


            var documentIds = [];

            results.forEach(result => {
                documentIds.push({
                    id: result._id,
                    userIP : result.userIP

                });
            });

            res.status(200);
            res.send({
                msg: "Success! Document IDs in the database:",
                documentIds : documentIds
            })


        });



    });


}