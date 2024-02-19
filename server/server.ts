const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const apiRouter = require('./src/routes/api');

// initialize the app
const app = express();

// default settings
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// routers
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (_req: any, _res: any, next: any) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, _next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
