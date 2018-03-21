'use strict';

const express = require('express');
const app = express();
const path = require('path');
const htmlController = require('./server/controllers/htmlController');
const fileController = require('./server/controllers/fileController');
const opencpuApi = require('./server/controllers/opencpuApi');


// app.use('/favicon.ico', express.static(path.join(__dirname,'/public/img/favicon.ico'))); //make favicon available
app.use('/public', express.static(path.join(__dirname, 'client')))
app.use('/public', express.static(path.join(__dirname, 'node_modules')))


htmlController(app,path,__dirname);
fileController(app,path,__dirname);
opencpuApi(app);



app.listen(3000, () => console.log('Listening on port 3000!')) //listen on port 3000