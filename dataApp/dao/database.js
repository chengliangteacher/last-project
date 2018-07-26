var mongoose = require('mongoose');
require("./model/goods.js")
require("./model/imgs.js")
require("./model/services.js")
require("./model/orders.js")
require('./model/imgs')
require('./model/shops')
require("./model/members")
require('./model/users')
var dbURI = 'mongodb://localhost/second';
// mongoose.Promise=require("bluebird")


mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});