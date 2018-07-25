var mongoose = require('mongoose');
require("./model/users.js")
var dbURI = 'mongodb://localhost/last';


require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")

mongoose.Promise=require("bluebird")
require("./model/orders.js")
<<<<<<< HEAD


// require("./model/movie.js")

require("./model/members")
var dbURI = 'mongodb://localhost/pets';

require('./model/imgs')
require('./model/shops')
require('./model/users')


=======

require('./model/imgs')
require('./model/shops')

// mongoose.Promise=require("bluebird")
>>>>>>> aa7ed89bfacd374973410b15577031d1284095db

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});