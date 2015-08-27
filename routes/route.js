exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));
  app.use('/users', require('./routers/users'));
  app.use('/teacher', require('./routers/teacher'));
  // app.use('/paper-list', require('./routers/paper-list'));
  app.use('/paper', require('./routers/paper'));
  app.use('/user-validate', require('./routers/user-validate'));
  app.use('/insert-fill', require('./routers/add-fill-blank'));
  app.use('/password',require('./routers/password'));
  app.use('/insert-multiple', require('./routers/add-multiple'));
  app.use('/insert-single', require('./routers/add-single'));
  app.use('/password',require('./routers/password'));
  app.use('/add-question', require('./routers/add-question'));
  app.use('/score', require('./routers/mark-exam'));
  app.use('/paper-check', require('./routers/paper-check'));
  
};
