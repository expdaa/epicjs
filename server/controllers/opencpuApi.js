'use strict';

const request = require('request');
const bodyParser = require('body-parser');
const RModel = require('../models/rModel.js');

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


module.exports = function (app) {



    app.use(bodyParser.text());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/lm/:dbId', (req, res) => {





        RModel.findById({ _id: req.params.dbId }, function (err, model) {
            if (err) throw err;

            console.log(model);

            var xValues = "",
                yValues = "";

            model.coords.forEach( (coord, index, arr) => {
                if(index !== arr.length-1) {
                    xValues += coord.x +",";
                    yValues += coord.y +",";
                } else {
                    xValues += coord.x +"";
                    yValues += coord.y +"";
                }
                
            });

            var str = "data.frame(lnLength = c("+ xValues +"),lnWeight = c("+ yValues +"))";


            console.log("df parsed: " + str);


            var formData = {
                // data: 'data.frame(lnLength = c(3.87,3.61,4.33,3.43,3.81,3.83,3.46,3.76,3.50,3.58,4.19,3.78,3.71,3.73,3.78),lnWeight = c(4.87,3.93,6.46,3.33,4.38,4.70,3.50,4.50,3.58,3.64,5.90,4.43,4.38,4.42,4.25))',
                data: str,
                formula: 'lnWeight~lnLength'
            };
    
    
    
            request.post({
                url: 'https://cloud.opencpu.org/ocpu/library/stats/R/lm',
                formData: formData
            }, getSessionIdCB);
    
    
    
            function getSessionIdCB(err, httpResponse, body) {
                if (err) { return console.error('upload failed:', err) }
                var sessionId = body.split('/')[3]; //get the openCPU session id e.g., /ocpu/tmp/x087451c97b/R/lm -> x087451c97b
                //console.log(sessionId);
                // res.send(body);
                request.get({
                    url: 'https://cloud.opencpu.org/ocpu/tmp/' + sessionId + '/R/.val'
                }, extractCoefficientCB);
            }
    
    
            function extractCoefficientCB(err, httpResponse, body) {
                var values = body.split('Coefficients:')[1].split(' '),
                    coefArr = [];
    
                values.forEach(elem => {
                    if (isNumeric(elem)) {
                        coefArr.push(elem);
                    }
                });
    
    
                var mockJSON = {
                    coords: model.coords,
                    intercept: parseFloat(coefArr[0]),
                    const: parseFloat(coefArr[1])
                }
    
                res.send(mockJSON);
            }






        });

        
    });

}