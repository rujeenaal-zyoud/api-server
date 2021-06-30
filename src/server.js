'use strict';

//dependincess

const express =require('express');
const morgan = require('morgan');
 const cors = require('cors');

 //import module that locally here

 const notFoundHandler = require ('./error-handlers/404');
 const errorHandler = require ('./error-handlers/500');
  //use my server app
const app = express();

const foodRouter =require('./routes/food');
  const clothesRouter = require('./routes/clothes');


//Globel middleware
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
//the routes
app.use('/api/v1/food',foodRouter);
app.use('/api/v1/clothes',clothesRouter);


//test the server
app.get('/',(req,res)=>{
    res.send('Hello World In server')
});


app.get('/bad',(req,res)=>{
    throw new Error('Error');
  })

app.use('*', notFoundHandler);
app.use(errorHandler);

//export the module
module.exports = {
    app:app,
    start :(PORT)=>{
        app.listen(PORT,()=>{
            console.log(`listening on ${PORT}`)
        })
    }
}