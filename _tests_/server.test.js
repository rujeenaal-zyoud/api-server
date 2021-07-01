'use strict';
const server=require('../src/server.js');
//const supertest=require('supertest');
const supergoose = require('@code-fellows/supergoose');

const request=supergoose(server.app);

describe('api-server', ()=>{
let id;

  it(' get status 404 for bad route',async()=>{
    const response =await request.get('/foo');
    expect(response.status).toBe(404);
 
  });

  it(' get status 404 for bad method ',async()=>{
    const response1 =await request.post('/clothes');
    const response2 =await request.post('/food');
    expect(response1.status).toBe(404);
    expect(response2.status).toBe(404);
  });
  
  it('create a new clothes using POST', async ()=>{

    let clothes={
        typeClothes: 'shirt',
      color: 'red',
    };
 
    const response=await request.post('/api/v1/clothes').send(clothes);
  
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.typeClothes).toEqual('shirt');
    expect(response.body.color).toEqual('red');
    expect(response.body._id.length).toBeGreaterThan(0);
    id = response.body._id;

  });

  it(' read the all clothes using GET',async()=>{
    const response =await request.get('/api/v1/clothes');
    expect(Array.isArray(response.body)).toBeTruthy();
   
  });


  it('Update a clothes by id using PUT', async () => {
    let editClothes={
        typeClothes: 'shirt',
      color: 'black',
    };
    const response = await request.put(`/api/v1/clothes/${id}`).send(editClothes);
    expect(response.status).toEqual(200);
    expect(response.body.color).toEqual('black');
  });

  it(' delete data by id using DELETE', async () => {

    const response = await request.delete(`/api/v1/clothes/${id}`);

    expect(response.status).toEqual(200);

    
  });

});






describe('food ', ()=>{
    let id;
    it(' create a new food using POST', async ()=>{
  
      let food={
        name: 'apple',
        typeFood: 'fruit',
      };
   
      const response=await request.post('/api/v1/food').send(food);
     
      expect(response.status).toEqual(201);
      expect(response.body.name).toEqual('apple');
      expect(response.body.typeFood).toEqual('fruit');
      expect(response.body._id.length).toBeGreaterThan(0);
      id = response.body._id;
    });
    it(' read a list of food  using GET',async()=>{
      const response =await request.get('/api/v1/food');
      expect(Array.isArray(response.body)).toBeTruthy();
     
    });
  
    it('should read a food by id using GET', async ()=>{
      const response =await request.get(`/api/v1/food/${id}`);
      expect(response.body[0].name).toEqual('apple');
      expect(response.body[0].typeFood).toEqual('fruit');
    } );
    it('Update a food using PUT', async () => {
      let editFood={
        name: 'banana',
        typeFood: 'fruit',
      };
     
      const response = await request.put(`/api/v1/food/${id}`)
        .send(editFood);
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('banana');
    });
    it('delete a record using DELETE', async () => {
   
      const response = await request.delete(`/api/v1/food/${id}`);

      expect(response.status).toEqual(200);
      
    });
  
  });
  