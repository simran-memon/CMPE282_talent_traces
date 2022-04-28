require('dotenv').config();
const express = require('express')
const aws = require('aws-sdk');
const fs = require('fs');
var path = require('path');

const app = express();
app.use(express.json());

//var userInfo = require('./routes/userInfo')
//var uploadResume = require('./routes/uploadResume')
var apply = require('./routes/applyToJob')

  // CORS Headers => Required for cross-origin/ cross-server communication
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
                  'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
                  'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  //app.use('/', userInfo);
  //app.use('/', uploadResume);
  app.use('/', apply);

const PORT = process.env.PORT || 6001;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;