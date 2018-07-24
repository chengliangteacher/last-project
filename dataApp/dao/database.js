var mongoose = require('mongoose');

mongoose.Promise=require("bluebird")
require("./model/orders.js")
var dbURI = 'mongodb://localhost/dingdan';

// require("./model/movie.js")
require('./model/imgs')
require('./model/shops')
require('./model/users')
var dbURI = 'mongodb://localhost/second';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});