exports.setRoutes = function(app) {
    app.use('/', require('./routers/index'));
    app.use('/users',require('./routers/users'));
    app.use('/teacher',require('./routers/teacher'));
    app.use('/paperList',require('./routers/paperList'));
};
