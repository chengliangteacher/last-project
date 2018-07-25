var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./dao/database.js')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
var goodsRouter = require('./routes/goods');
var filesRouter = require('./routes/files');
var goodsImgsRouter=require('./routes/goodsImgs')
var serviceImgsRouter=require('./routes/service')

=======
<<<<<<< HEAD
var membersRouter=require("./routes/members")

=======
var orderWrapRouter =require("./routes/orderWrap")
var shopsRouter=require('./routes/shops')
var imgsRouter=require('./routes/imgs')
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860
>>>>>>> da6624c36027a9c2cad0a5662976208c4b84147d
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/goods', goodsRouter);
app.use('/files', filesRouter);
app.use('/goodsImgs', goodsImgsRouter);
app.use('/service', serviceImgsRouter);
=======
<<<<<<< HEAD
app.use('/members', membersRouter);
=======
app.use('/users', orderWrapRouter);

app.use('/shops', shopsRouter);
app.use('/imgs', imgsRouter);
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860

>>>>>>> da6624c36027a9c2cad0a5662976208c4b84147d
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
