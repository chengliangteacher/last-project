var mongoose = require('mongoose');
mongoose.Promise=require("bluebird")
require("./model/members")
require("./model/orders.js")
require('./model/imgs')
require('./model/shops')
require('./model/users')
require('./model/goods')
require('./model/services')
var dbURI = 'mongodb://localhost/second';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});