var mongoose = require('mongoose');
require("./model/users.js")
var dbURI = 'mongodb://localhost/last';
require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")


mongoose.Promise=require("bluebird")
require("./model/orders.js")

require('./model/imgs')
require('./model/shops')
require('./model/users')
var dbURI = 'mongodb://localhost/last';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});