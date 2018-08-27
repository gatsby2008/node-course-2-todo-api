var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:Mac#1g@ds133762.mlab.com:33762/todoapp' || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose}
