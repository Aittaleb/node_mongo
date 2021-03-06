// const {ObjectID} = require('mongodb');
const express = require('express');


// const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');
// const {User} = require('./../server/models/user');

var app = express();


// var id = '57bf38394b39c93d2a557e9811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

app.get('/todos/:id', (req , res) => {
  var id = req.params.id;
    // if(ObjectID.isValid(id)){
    //  return res.send(req.params);
    // } 
    res.send({id});
})


// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));



// User.findById('57bdb0fcdedf88540bfa2d66').then((user) => {
//   if (!user) {
//     return console.log('Unable to find user');
//   }

//   console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
//   console.log(e);
// });

app.listen(4000,() => {
  console.log('server is up on 3000');
})
