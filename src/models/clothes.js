'use strict';

const mongoose = require ('mongoose');
//create the schema
const clothesSchema = mongoose.Schema({
    typeClothes :{type:String , required:true},
    color : {type:String}
})
//create the modal for schema so we can used  (record it mean the Clothes(document))
const clothesModel = mongoose.model('clothes',clothesSchema)

module.exports = clothesModel;