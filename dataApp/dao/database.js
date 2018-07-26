var mongoose = require('mongoose');
mongoose.Promise=require("bluebird")
require("./model/members")
require("./model/users.js")
require("./model/goods.js")
require("./model/imgs.js")
require("./model/services.js")
require("./model/orders.js")
require('./model/shops')
var dbURI = 'mongodb://localhost/second';

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});