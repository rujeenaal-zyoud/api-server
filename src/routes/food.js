'use strict';
//HERE WE WILL CREATE THE REQUEST FOR CRUD using RESTAPI 
const express = require('express');
const foodsModel = require('../models/food.js');
//const validator = require('../middleware/validator')
const DataCollection = require('../models/data-collection-class');
const router = express.Router();
//foods here that in model class that we create
const foods = new DataCollection(foodsModel);


//create requests
router.get('/', getfoods);
router.get('/:id', getfoods);
router.post('/', createfoods);
router.put('/:id', updatfoods);
router.delete('/:id', deletefoods);


async function getfoods(req, res,next) {
    try {

        const resObj =  await foods.read(req.params.id);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }
}

async function createfoods(req, res,next) {
    try {

        const resObj =  await foods.create(req.body);
        res.status(201).json(resObj)
    }
    catch (e) {
        next(e);
    }
}

// const  createfoods =async (req,res)=>{
//     const resObj =  await foods.create(req.body);
//     res.status(201).json(resObj)

// }


 async function updatfoods(req, res,next) {
    //we give the function parametre as the model we have create
    try {

        const resObj =  await foods.update(req.params.id, req.body);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }
}



async function deletefoods(req, res,next) {
    //we give the function parametre as the model we have create
    try {

        const resObj =  await foods.delete(req.params.id);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }
}




module.exports = router;
