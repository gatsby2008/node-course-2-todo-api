// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b5fc71ea989199345b922fb')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => { console.log(JSON.stringify(result, undefined, 2)) })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b5fcb66a989199345b924d0')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => { console.log(JSON.stringify(result, undefined, 2)) })
})
