module.exports = function (app,path,dirname) {

    app.get('/templates/LinearRegression', (req, res) => {

        console.log("here");
        res.sendFile(path.join(dirname + '/server/content/templates/Linear Regression.xlsx'));
        
    });


}