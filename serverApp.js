'use strict';

const express = require('express');
const app = express();
const path = require('path');
const htmlController = require('./server/controllers/htmlController');
const fileController = require('./server/controllers/fileController');
const dbController = require('./server/controllers/dbController');
const opencpuApi = require('./server/controllers/opencpuApi');

const mongoose = require('mongoose');
const config = require('./config');
const seedData = require('./server/models/seedData');



// app.use('/favicon.ico', express.static(path.join(__dirname,'/public/img/favicon.ico'))); //make favicon available
app.use('/public', express.static(path.join(__dirname, 'client')))
app.use('/public', express.static(path.join(__dirname, 'node_modules')))


htmlController(app,path,__dirname);
fileController(app,path,__dirname);
dbController(app,path,__dirname);

opencpuApi(app);


mongoose.connect(config.getDBConnStr());
// seedData();//load data for the first time




app.listen(process.env.PORT || 3000, () => console.log('Listening on port' + (process.env.PORT || ' 3000'))); //listen on port 3000