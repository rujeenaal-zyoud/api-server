'use strict';

class DataCollection {
  constructor(model)
  //the model mean model in mongoose that we have created loke db in prevoius lab
  {
    this.model =model;
  }


// _id from mongobase
read(_id){

  if(_id)
  {
    return this.model.find({_id});
  }
  //if don't have the id return all database record
  return this.model.find({});

}

create(obj){
  //craete new model in mongodb
  const doc = new this.model(obj);
  return doc.save();
}

update(_id,obj){
  return this.model.findByIdAndUpdate(_id, obj, { new: true });
}

delete(_id){
  return this.model.findByIdAndDelete(_id);
}




}

module.exports= DataCollection;