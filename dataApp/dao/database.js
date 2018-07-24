var mongoose = require('mongoose');
mongoose.Promise=require("bluebird")
require("./model/orders.js")
var dbURI = 'mongodb://localhost/dingdan';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});