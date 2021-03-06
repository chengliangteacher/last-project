var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./dao/database.js')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/goods');
var filesRouter = require('./routes/files');
var goodsImgsRouter=require('./routes/goodsImgs');
var serviceImgsRouter=require('./routes/service');
var membersRouter=require("./routes/members");
var orderWrapRouter =require("./routes/orderWrap");
var shopsRouter=require('./routes/shops');
var imgsRouter=require('./routes/imgs');
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
app.use('/goods', goodsRouter);
app.use('/files', filesRouter);
app.use('/goodsImgs', goodsImgsRouter);
app.use('/service', serviceImgsRouter);
app.use('/members', membersRouter);
app.use('/orderWrap', orderWrapRouter);
app.use('/shops', shopsRouter);
app.use('/imgs', imgsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;