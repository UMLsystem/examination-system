exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));
  app.use('/users', require('./routers/users'));
  app.use('/teacher', require('./routers/teacher'));
  app.use('/paperList', require('./routers/paperList'));
  app.use('/paper', require('./routers/paper'));
  app.use('/student', require('./routers/student-validate'));
  app.use('/score',require('./routers/mark-exam'));
  app.use('/insertFill', require('./routers/add-fillBlank.js'));
  app.use('/insertMultiple', require('./routers/add-single.js'));
  app.use('/insertSingle', require('./routers/add-multiple.js'));



};
