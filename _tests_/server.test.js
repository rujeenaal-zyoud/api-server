'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');
//const supergoose = require('@code-fellows/supergoose');

const request=supertest(server.app);

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
        typeIt: 'shirt',
      nameIt: 'red',
    };
 
    const response=await request.post('/api/v1/clothes').send(clothes);
  
    expect(response.status).toEqual(201);
   
  });



  it('Update a clothes by id using PUT', async () => {
    let editClothes={
        typeIt: 'shirt',
      nameIt: 'black',
    };
    const response = await request.put(`/api/v1/clothes/${id}`).send(editClothes);
    expect(response.status).toEqual(500);
  });

  it(' delete data by id using DELETE', async () => {

    const response = await request.delete(`/api/v1/clothes/${id}`);

    expect(response.status).toEqual(500);

    
  });

});






describe('food ', ()=>{
    let id;
    it(' create a new food using POST', async ()=>{
  
      let food={
        typeIt: 'apple',
        nameIt: 'fruit',
      };
   
      const response=await request.post('/api/v1/food').send(food);
     
      expect(response.status).toEqual(201);
    
    });
    it(' read a list of food  using GET',async()=>{
      const response =await request.get('/api/v1/food');
      expect(Array.isArray(response.body)).toBeTruthy();
     
    });
  
  
    it('Update a food using PUT', async () => {
      let editFood={
        typeIt: 'banana',
        nameIt: 'fruit',
      };
     
      const response = await request.put(`/api/v1/food/${id}`)
        .send(editFood);
      expect(response.status).toEqual(500);
    });
    it('delete a record using DELETE', async () => {
   
      const response = await request.delete(`/api/v1/food/${id}`);

      expect(response.status).toEqual(500);
      
    });
  
  });
  