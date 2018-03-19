var request = require('request');
var bodyParser = require('body-parser');



module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.get('/lm', (req, res) => {


        // var formData = {
        //     data: 'data.frame(lnLength = c(3.87,3.61,4.33,3.43,3.81,3.83,3.46,3.76,3.50,3.58,4.19,3.78,3.71,3.73,3.78),lnWeight = c(4.87,3.93,6.46,3.33,4.38,4.70,3.50,4.50,3.58,3.64,5.90,4.43,4.38,4.42,4.25))',
        //     formula: 'lnWeight~lnLength'
        // };

        // request.post({
        //     url: 'https://cloud.opencpu.org/ocpu/library/stats/R/lm',
        //     formData: formData
        // },
        //     function (err, httpResponse, body) {
        //         if (err) {return console.error('upload failed:', err)}

        //         res.send(body);

        //     });

        var mockJSON = {
            coords : [
             {id : 1,x : 3.87,y : 4.87},
             {id : 2,x : 3.61,y : 3.93},
             {id : 3,x : 4.33,y : 6.46},
             {id : 4,x : 3.43,y : 3.33},
             {id : 5,x : 3.81,y : 4.38},
             {id : 6,x : 3.83,y : 4.70},
             {id : 7,x : 3.46,y : 3.50},
             {id : 8,x : 3.76,y : 4.50},
             {id : 9,x : 3.50,y : 3.58},
             {id : 10,x : 3.58,y : 3.64},
             {id : 11,x : 4.19,y : 5.90},
             {id : 12,x : 3.78,y : 4.43},
             {id : 13,x : 3.71,y : 4.38},
             {id : 14,x : 3.73,y : 4.42},
             {id : 14,x : 3.78,y : 4.25}
                    
            ],
            intercept : -8.4761,
            const : 3.4311
        }

        res.send(mockJSON);




    });

}