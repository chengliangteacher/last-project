var mongoose = require('mongoose');

mongoose.Promise=require("bluebird")
require("./model/orders.js")
var dbURI = 'mongodb://localhost/dingdan';

// require("./model/movie.js")
<<<<<<< HEAD
require("./model/members")
var dbURI = 'mongodb://localhost/pets';
=======
require('./model/imgs')
require('./model/shops')
require('./model/users')
var dbURI = 'mongodb://localhost/second';
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});