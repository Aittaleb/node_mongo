// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('testInc').insertOne({
    text: 'eat dinner',
    completed: false,
    age : 0
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert test', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('testInc').findOneAndUpdate({
  //   text : 'eat dinner'
  // },{
  //   $inc : {
  //     age : 2
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
