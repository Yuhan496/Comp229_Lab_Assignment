// import and create express application
const express = require('express');
const app = express();

//import middleware
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');

// config middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import routers
var indexRouter = require('../app/routers/index');
var usersRouter = require('../app/routers/users');
var servicesRouter = require('../app/routers/services');
var referencesRouter = require('../app/routers/references');
var projectsRouter = require('../app/routers/projects');

//register routers
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/services', servicesRouter);
app.use('/api/references', referencesRouter);
app.use('/api/projects', projectsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error json
  res.status(err.status || 500);
  res.json(
    {
      success: false,
      message: err.message
    }
  );
});

module.exports = app;
