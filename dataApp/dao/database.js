var mongoose = require('mongoose');
mongoose.Promise=require("bluebird")
require("./model/users.js")
var dbURI = 'mongodb://localhost/second';
require("./model/imgs.js")
require("./model/services.js")
require("./model/orders.js")
require('./model/shops')
require("./model/members")
require('./model/users')
require('./model/goods')
require('./model/members')
require('./model/services')
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});