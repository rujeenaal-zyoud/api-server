'use strict';

const mongoose = require ('mongoose');
//create the schema
const foodSchema = mongoose.Schema({
   name :{type:String , required:true},
    typeFood : {type:String}
})
//create the modal for schema so we can used  (record it mean the Foods)
const foodsModel = mongoose.model('foods',foodSchema)

module.exports = foodsModel;