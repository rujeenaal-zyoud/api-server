'use strict';
//HERE WE WILL CREATE THE REQUEST FOR CRUD using RESTAPI 
const express = require('express');
const clothesModel = require('../models/clothes.js');
const dataCollection = require('../models/data-collection-class');
//const validator = require('../middleware/validator')
const router = express.Router();
//Clothes here that in model class that we create
const clothes = new dataCollection(clothesModel);


//create requests
router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', createClothes);
router.put('/:id', updatClothes);
router.delete('/:id', deleteClothes);


async function getClothes(req, res, next) {
    try {

        const resObj = await clothes.read(req.params.id);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }

}

async function createClothes(req, res, next) {
    try {
        const resObj =  await clothes.create(req.body);
        res.status(201).json(resObj)
    }
    catch (e) {
        next(e);
    }
}


async function updatClothes(req, res,next) {
    //we give the function parametre as the model we have create
    try {

        const resObj = await clothes.update(req.params.id, req.body);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }
}


async function deleteClothes(req, res,next) {
    //we give the function parametre as the model we have create
    try {

        const resObj = await clothes.delete(req.params.id);
        res.json(resObj);
    }
    catch (e) {
        next(e);
    }

}

module.exports = router;