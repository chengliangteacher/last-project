var mongoose = require('mongoose');
<<<<<<< HEAD
require("./model/users.js")
var dbURI = 'mongodb://localhost/last';
=======
<<<<<<< HEAD
require("./model/goods.js")
require("./model/imgs.js")
require("./model/users.js")
require("./model/services.js")

=======

mongoose.Promise=require("bluebird")
require("./model/orders.js")
var dbURI = 'mongodb://localhost/dingdan';

// require("./model/movie.js")
<<<<<<< HEAD
require("./model/members")
var dbURI = 'mongodb://localhost/pets';
=======
require('./model/imgs')
require('./model/shops')
require('./model/users')
>>>>>>> da6624c36027a9c2cad0a5662976208c4b84147d
var dbURI = 'mongodb://localhost/second';
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860
>>>>>>> 6c332e6f3358d92eb2aad8b55471d8ea55555eda

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});