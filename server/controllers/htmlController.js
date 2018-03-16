module.exports = function (app,path,dirname) {

    app.get('/', (req, res) => {
        res.sendFile(path.join(dirname + '/client/index.html'));//main index file
        
    });


}