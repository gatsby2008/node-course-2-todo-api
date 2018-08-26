var {mongoose} = require('./../server/db/mongoose')
var {Todo} = require('./../server/models/todo')

const id = '5b66fe4bef8e3ddd2e1cf7a7'

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
  console.log('Todo by Id', todo)
})
