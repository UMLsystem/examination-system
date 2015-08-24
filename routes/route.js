exports.setRoutes = function(app) {
  app.use('/student-index', require('./routers/student-index'));
  app.use('/teacher-index', require('./routers/teacher-index'));
  app.use('/users', require('./routers/users'));
  app.use('/teacher', require('./routers/teacher'));
  app.use('/paperList', require('./routers/paperList'));
  app.use('/paper', require('./routers/paper'));
  app.use('/student-validate', require('./routers/student-validate'));
  app.use('/teacher-validate', require('./routers/teacher-validate'));
  app.use('/score',require('./routers/mark-exam'));
  app.use('/insertFill', require('./routers/add-fillBlank.js'));
  app.use('/insertMultiple', require('./routers/add-single.js'));
  app.use('/insertSingle', require('./routers/add-multiple.js'));
  app.use('/password',require('./routers/password'));
};
