require('dotenv').config();
const express = require('express')
const aws = require('aws-sdk');
const fs = require('fs');
var path = require('path');

const app = express();
app.use(express.json());

var userInfo = require('./routes/userInfo')
var uploadResume = require('./routes/uploadResume')

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

  app.use('/', userInfo);
  app.use('/', uploadResume);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;