'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
//const MONGODB_URI = process.env.MONGODB_URI;
 const pool = require('./src/models/pool.js');

console.log('rujeena');

  pool.connect()
   .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });

 

