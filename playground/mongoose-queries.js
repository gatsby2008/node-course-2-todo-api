const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {ObjectID} = require('mongodb')
const {User} = require('./../server/models/user')
var id = '5b80799f806a15f74bae8241'
if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos)
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo)
})

Todo.findById(id).then((todo) => {
  if (!todo) {
    console.log('Id not found')
  }
  console.log('Todo By Id', todo)
}).catch((e) => console.log(e))
var userId = '5b608c8bddd0a11379e03ddf'
User.findById(userId).then((user) => {
  if (!user) {
    console.log('Id not found')
  }
  else {
    console.log(JSON.stringify(user, undefined, 2))
  }
}).catch((e) => console.log(e))
