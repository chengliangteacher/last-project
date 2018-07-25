var mongoose = require('mongoose');
mongoose.Promise=require("bluebird")
require("./model/goods.js")
require("./model/imgs.js")
require("./model/services.js")
require("./model/orders.js")
require("./model/members")
require('./model/shops')
require('./model/users')
var dbURI = 'mongodb://localhost/second';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});