var mongoose = require('mongoose');

mongoose.Promise=require("bluebird")
require("./model/orders.js")


// require("./model/movie.js")

require("./model/members")
var dbURI = 'mongodb://localhost/pets';

require('./model/imgs')
require('./model/shops')
require('./model/users')



mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});