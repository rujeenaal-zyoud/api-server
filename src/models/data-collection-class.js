 'use strict';

const pool =require('./pool.js');
class DataCollection{

//create constrotre for one ne ${this.name} and one food tables in sql
  constructor(table){
this.table =table;
  }
read(id){
  if(id){
    //will return just if with id 
    return pool.query(`SELECT * FROM ${this.table} WHERE id=$1;`,[id]);
  }
  return pool.query(`SELECT * FROM ${this.table};`);

}
create(obj){
const sql =` INSERT INTO ${this.table} (typeIt,nameIt) VALUES ($1,$2) RETURNING *;`;
const saveObject = [obj.typeIt ,obj.nameIt]
// console.log(saveObject);
return pool.query(sql,saveObject);
}






update(id,obj){
  const sql =`UPDATE ${this.table} SET name=$1,role=$2 WHERE id=$3 RETURNING *;`;
  const saveObject = [obj.typeIt, obj.nameIt,id]
return pool.query(sql,saveObject); 
}



  delete(id) {
    return pool.query(`DELETE FROM ${this.table} WHERE id=$1 RETURNING *;`, [id]);
  }
}

 module.exports= DataCollection;
















//this in MONGO db 

// 'use strict';

// class DataCollection {
//   constructor(model)
//   //the model mean model in mongoose that we have created loke db in prevoius lab
//   {
//     this.model =model;
//   }


// // _id from mongobase
// read(_id){

//   if(_id)
//   {
//     return this.model.find({_id});
//   }
//   //if don't have the id return all database record
//   return this.model.find({});

// }

// create(obj){
//   //craete new model in mongodb
//   const doc = new this.model(obj);
//   return doc.save();
// }

// update(_id,obj){
//   return this.model.findByIdAndUpdate(_id, obj, { new: true });
// }

// delete(_id){
//   return this.model.findByIdAndDelete(_id);
// }




// }

// module.exports= DataCollection;