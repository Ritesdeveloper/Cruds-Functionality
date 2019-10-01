const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class  Employee{
  constructor(name, email, address, phoneno){
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneno = phoneno
  }

  save() {
    const db = getDb();
    let dbop;
    if(this._id){
      // Update the Product
      dbop = db.collection('candidate').updateOne({_id: new mongodb.ObjectId(this._id)}, {$set : this});
    } else{
      dbop = db.collection('candidate').insertOne(this);
    }  
    return  dbop
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
    
  
  static fetchAll() {
    const db = getDb();
    return db
      .collection('candidate')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }
      
  
  static findById(empId) {
    const db = getDb();
    return db
    .collection('candidate')
    .find({_id: new mongodb.ObjectId (empId)})
    .next()
    .then(employee =>{
      console.log(employee);
      return employee;
    })
    .catch(err =>{
      console.log(err);
    });
  }
      
  static deleteById(empId){
    const db = getDb();
    return db
    .collection('candidate')
    .deleteOne({_id : new mongodb.ObjectId(empId)})
    .then(result =>{
      console.log('Deleted')
    })
    .catch(err =>{
      console.log(err);

    });

  }
}
module.exports = Employee;