var mongoose=require("mongoose")
var dbURI = 'mongodb://localhost/pets';
mongoose.Promise=require("bluebird")
require("./model/goods.js")
require("./model/services.js")
require("./model/orders.js")
require("./model/members")
require('./model/imgs')
require('./model/shops')
require('./model/users')
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});